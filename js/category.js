let params = new URLSearchParams(location.search);
let category = params.get("category");
let tituloPag = document.querySelector(".tituloCategoria");
tituloPag.innerText = `Category: ${category}`;

if (!category) {
  console.error("No se recibió la categoría en la URL");
} else {
  fetch(`https://dummyjson.com/products/category/${category}`)
    .then(function(response) {
      return response.json();
    })
    .then(function (data) {
      let categoryList = document.querySelector(".masVendidos1");
      let itemsHtml = "";
      for (let i = 0; i < data.products.length; i++) {
        itemsHtml += `
          <article class="categoryItemCard">
            <img class="album" src='${data.products[i].thumbnail}' alt='${data.products[i].title}'>
            <div class="textoArriba">
              <h4>${data.products[i].title}</h4>
              <p>${data.products[i].description}</p>
            </div>
            <div class="textoAbajo">
              <h4 class="precio">$${data.products[i].price}</h4>
              <a class="botonVerMas" href="./product.html?id=${data.products[i].id}">Ver más</a>
            </div>
          </article>
        `;
      }

      categoryList.innerHTML = itemsHtml;
    })
    .catch((err) => console.error("Error fetching category items:", err));
}
fetch("https://dummyjson.com/products/category-list")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let categoryMenu = document.querySelector(".listaCategorias");
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
