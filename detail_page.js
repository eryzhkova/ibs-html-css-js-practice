function createItemDetails(item) {
    const detailContainer = document.getElementById('detail-container');
    const divImg = document.createElement('div');
    divImg.className = "image-detail";
    divImg.innerHTML = `<img src="${API}${item.picture.path}" alt="${item.picture.alt}" />`

    const div = document.createElement('div');
    div.className = "details";

    const h2 = document.createElement('h2');
    h2.className = "h-detail"
    h2.innerText = item.name;

    const p = document.createElement('p');
    p.innerText = item.info;

    const span = document.createElement('span');
    span.className = "h-detail"
    span.innerText = "Details";

    const p2 = document.createElement('p');
    p2.innerText = item.details;

    const divPrice = document.createElement('div');
    divPrice.className = "price-detail";

    const span2 = document.createElement('span');
    span2.innerText = `${item.price.value} ${item.price.currency}`;

    const divCart = document.createElement('div');
    divCart.className = "cart";
    divCart.innerHTML = '<div class="counter"><button>-</button><input type="text" value="1"/><button>+</button></div><button class="cart-btn">Add to cart</button>';

    const svg = document.createElement('svg');
    svg.width = "24";
    svg.height = "24";
    svg.viewBox = "0 0 24 24";
    svg.fill = "none";
    svg.xmlns = "http://www.w3.org/2000/svg";
    svg.innerHTML = '<path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="#959595"/>';
    divPrice.append(span2);
    divPrice.append(divCart);
    divPrice.append(svg);

    div.append(h2);
    div.append(p);
    div.append(span);
    div.append(p2);
    div.append(divPrice);

    detailContainer.append(divImg);
    detailContainer.append(div);
};


function get_id() {
    const url_string = window.location.href;
    const url = new URL(url_string);
    return url.searchParams.get("item-id");;
};

// Add data on pages with url
getAJAXData('GET', `/item/:${get_id()}`, function(item){
    createItemDetails(item.content);
});