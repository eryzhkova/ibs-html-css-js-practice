let API = "http://localhost:3006";

// Receive data from server
function getAJAXData(method, url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, API + url);
    xhr.onreadystatechange = function(){
        if (this.readyState == 4) {
            if (this.status == 200)
                callback(JSON.parse(this.responseText));
        }
    };
    xhr.send(null);
};