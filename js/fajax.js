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
        this.responseText = network({method: this.method, url: this.url, data: this.data});
        if(typeof this.responseText === "number"){
            this.status = this.responseText;
        }
        else{
            this.status = 200;
        }
        setTimeout(this.onload(), 1000)
    }
    

}