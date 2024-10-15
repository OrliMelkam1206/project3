class FAJAX {
    constructor() {
        this.method = null;
        this.url = null;
        this.responseText = '';
        this.data = null;
        this.status = 0;
    }
    open(method, url){
        this.method = method;
        this.url = url;
    }
    send(data = null){
        this.data = data;
        network(this);
        setTimeout(this.onload(), 1000)
    }
    

}