class UserComment {
    public id: string;
    public userId: string;
    public content: string;
    public replies: UserComment[];
    constructor(id: string, userId: string, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    addReply(reply: UserComment): void {
        this.replies.push(reply);
    }
}

class Post {
    public id: string;
    public userId: string;
    public content: string;
    public likes: string[];
    public comments: UserComment[];
    constructor(id: string, userId: string, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }

    addLike(userId: string): void {
        const liked = this.likes.find(u => u == userId);
        if (!liked) this.likes.push(userId);
    }

    addComment(comment: UserComment): void {
        this.comments.push(comment);
    }
}

class User {
    public id: string;
    public posts: Post[];
    public followers: User[];
    constructor(id: string) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    createPost(content: string): void {
        const postId = "post" + Date.now();
        const post = new Post(postId, this.id, content);
        this.posts.push(post);
    }

    comment(postId: string, commentContent: string): void {
        this.followers.forEach(user => {
            user.posts.forEach(post => {
                if (post.id == postId) {
                    const commentId = "comment" + Date.now();
                    const comment = new UserComment(commentId, this.id, commentContent);
                    post.addComment(comment);
                }
            });
        });
    }

    follow(user: User): void {
        const alreadyFollowed = this.followers.find(u => u.id == user.id);
        if (!alreadyFollowed) this.followers.push(user);
    }

    likePost(postId: string): void {
        this.followers.forEach(user => {
            user.posts.forEach(post => {
                if (post.id == postId) {
                    post.addLike(this.id);
                }
            });
        });
    }

    viewFeed(): void {
        console.log(`Bảng tin của ${this.id}:`);
        this.followers.forEach(user => {
            user.posts.forEach(post => {
                console.log(`[${user.id}] ${post.content} (Thích: ${post.likes.length}, Bình luận: ${post.comments.length})`);
            });
        });
    }
}

const u1 = new User("u1");
const u2 = new User("u2");
const u3 = new User("u3");
u1.follow(u2);
u1.follow(u3);
u2.createPost("Xin chào!");
u3.createPost("Chúc một ngày tốt lành!");
u1.likePost(u2.posts[0].id);
u1.comment(u3.posts[0].id, "Bài hay quá!");
u1.viewFeed();
