/*fetching the data*/
function init() {
    fetch("http://allofme.dk/TheSource/wp-json/wp/v2/product_details?_embed")
        .then(r => r.json())
        .then(
        function (data) {
            data.forEach(divi);
            console.log(data);
        }
    )
}
init();

function divi (categories) {
    const urlpara = new URLSearchParams(window.location.search);
    console.log("URLSearchParms" + window);
    const the_page_id = urlpara.get("page_cat");
    console.log(the_page_id);
    if ( the_page_id == categories._embedded['wp:term'][0][0].name ){
        showprod(categories);
    }


}


function showprod (product) {
    const templ = document.querySelector("#Template").content;
    const copy = templ.cloneNode(true);

    const p = copy.querySelector("p");
    p.textContent = product.slug;

    copy.querySelector(".price").textContent = product.price;


    const img = copy.querySelector(".productImg");
    img.setAttribute('src', product.item_picture.guid);

    document.querySelector("#prodnav").appendChild(copy);

}

