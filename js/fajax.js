class FAJAX {
    constructor() {
        this.method = null;
        this.url = null;
        this.responseText = '';
        this.data = null;
    }
    open(method, url){
        this.method = method;
        this.url = url;
    }
    send(data = null){
        this.responseText = network({method: this.method, url: this.url, data: this.data});
    }
    
}