export default class Parent {
	constructor(container, url) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON/' + url;
        this._init();
    }
    
    _get(url) {
        return fetch(url).then(d => d.json()) 
    }
}