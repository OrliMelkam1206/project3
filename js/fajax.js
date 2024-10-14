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
        this.responseText = network({method: this.method, url: this.url, data: this.data});
        if(this.responseText !== 404){
            this.status = 200;
        }
        else{
            this.status = 404;
        }
        setTimeout(this.onload(), 1000)
    }
    

}