function myServer(obj){
    let words = obj.url.split('/').filter(word => word);
    switch(obj.method){
        case 'GET':
            if(checkUrl(obj.url)){
                if(words[2] === 'users'){
                    getUsers();
                    return 200;
                }
                else{
                    getContacts();
                    return 200;
                }
            }
            else{
                return 404;
            }
        case 'POST':
            if(checkUrl(obj.url)){
                if(words[2] === 'users'){
                    postUsers(obj.data);
                    return 200;
                }
                else{
                    postContact(obj.data);
                    return 200;
                }
            }
            else{
                return 404;
            }
    }
}

function checkUrl(url){
    let words = url.split('/').filter(word => word);
    if(words.length > 2 && words.length < 5){
        if(words[0] === 'tamarOrli' && words[1] === 'api'){
            switch(words[2]){
                case 'users':
                    return true;
                case 'contacts':
                    return true;
                default:
                    return false;
            }
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}