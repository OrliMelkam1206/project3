function network(obj){
    obj.responseText = myServer({method: obj.method, url: obj.url, data: obj.data});
    if(typeof obj.responseText === "number"){
        obj.status = obj.responseText;
    }
    else{
        obj.status = 200;
    }
    if(obj.responseText === null){
        obj.status = 404;
    }
}