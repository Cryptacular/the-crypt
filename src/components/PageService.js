class PageService {
    connectionString = 'https://the-crypt-1047.firebaseio.com';

    getAllPages() {
        return fetch(`${this.connectionString}/page.json`);
    }

    getPage(page) {
        return fetch(`${this.connectionString}/page/${page}.json`);
    }
}

export default new PageService();