"use strict";
class UserComment {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class Post {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    addLike(userId) {
        const liked = this.likes.find(u => u == userId);
        if (!liked)
            this.likes.push(userId);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        const postId = "post" + Date.now();
        const post = new Post(postId, this.id, content);
        this.posts.push(post);
    }
    comment(postId, commentContent) {
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
    follow(user) {
        const alreadyFollowed = this.followers.find(u => u.id == user.id);
        if (!alreadyFollowed)
            this.followers.push(user);
    }
    likePost(postId) {
        this.followers.forEach(user => {
            user.posts.forEach(post => {
                if (post.id == postId) {
                    post.addLike(this.id);
                }
            });
        });
    }
    viewFeed() {
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
