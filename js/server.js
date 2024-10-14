function myServer(obj){
    let words = obj.url.split('/').filter(word => word);
    switch(obj.method){
        case 'GET':
            if(checkUrl(obj.url)){
                if(words[2] === 'users'){
                    if(words.length === 4){
                        let id = parseInt(words[3]);
                        if(id < addIdToUser()){
                            return getUserById(id)
                        }
                    }
                    else{
                        return getUsers();
                    }
                }
                else if(words[2] === 'contacts'){
                    return getContacts();
                }
                else{
                    return getCurrentUser();
                }
            }
            else{
                return 404;
            }
        case 'POST':
            if(checkUrl(obj.url)){
                if(words[2] === 'users'){
                    return postUsers(obj.data);
                }
                else if(words[2] === 'contacts'){
                    return postContact(obj.data[0], obj.data[1]);
                }
                else{
                    return 404;
                }
            }
            else{
                return 404;
            }
        case 'PUT':
            if(obj.url === 'tamarOrli/api/currentUser'){
                return setCurrentUser(obj.data);
            }
            else{
                return 404;
            }
        case 'DELETE':
            if(checkUrl(obj.url)){
                if(words[2] === 'contacts' && typeof (words[3] * 1) === 'number'){
                    return deleteContantById(obj.data[0], obj.data[1]);
                }
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
                case 'currentUser':
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