const inputSearch = document.getElementById("search-input");
inputSearch.addEventListener(
    "keyup",
    debounce(getData, 2000)
);

function debounce(callback, delay) {
    let timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout(callback, delay);
    }
};

function getData(text) {
    
    getAJAXData('GET', '/item', function(items) {
        let arr = [];
        items.content.forEach(item => {
            if(item.name.toLowerCase().includes(inputSearch.value.toLowerCase())) {
                arr.push(item);
            }
        });
        document.getElementById('list-catalog').innerHTML = ""; //clear before show new
        addItems(arr); 
    });
};

