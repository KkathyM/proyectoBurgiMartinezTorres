let params = new URLSearchParams(location.search);
let search = params.get("search_query");

let searchTitle = document.querySelector(".tituloSearch");
searchTitle.innerText = `Search results for: ${search}`;

fetch(`https://dummyjson.com/products/search?q=${search}`)
.then(function (response) {
    return response.json();
})
.then(function (data){
    if (data.total === 0 || search === "") {
    let noResultsMessage = document.querySelector(".noResults");
    noResultsMessage.style.display = "block";
    return;
    }
    if (search.length < 3) {
    let noResultsMessage = document.querySelector(".noResults");
    let mensaje = document.querySelector("#noresultados");
    mensaje.innerText = "La búsqueda debe tener al menos 3 caracteres.";
    noResultsMessage.style.display = "block";
    return;
    }
    let searchResultsList = document.querySelector(".masVendidos1");
    let itemsHtml = "";
    for (let i = 0; i < data.products.length; i++) {
        itemsHtml += `
        <article>
            <img class="album" src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
            <div class="textoArriba">
              <h4>${data.products[i].title}</h4>
              <p>${data.products[i].description}</p>
            </div>
            <div class="textoAbajo">
              <h4 class="precio">$${data.products[i].price}</h4>
              <a class="botonVerMas" href="./product.html?id=${data.products[i].id}">VER MÁS</a>
            </div>
          </article>`;
    }

    searchResultsList.innerHTML = itemsHtml;
})
.catch(function (error) {
    console.error("Error fetching search results:", error);
});
fetch("https://dummyjson.com/products/category-list")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const categoryMenu = document.querySelector(".listaCategorias");
    let categoriesHtml = "";
    for (let i = 0; i < data.length; i++) {
      categoriesHtml += `
        <li><a href="./category.html?category=${(data[i])}">${data[i]}</a></li>
      `;
    }
    categoryMenu.innerHTML = categoriesHtml;
  })
  .catch(function(error) {
    console.error("Error fetching categories:", error);
  });

function url(apiUrl) {
  return apiUrl;
}
