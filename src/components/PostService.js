class PostService {
    connectionString = 'https://the-crypt-1047.firebaseio.com';

    getAllPosts() {
        return fetch(`${this.connectionString}/post.json`);
    }

    getPost(post) {
        return fetch(`${this.connectionString}/post/${post}.json`);
    }
}

export default new PostService();