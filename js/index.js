// numero random para producto random de 1 a 194 inclusive
let randomId = Math.floor(Math.random() * 194) + 1;

// LISTA DE CAGORÍAS EN EL MENÚ
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
// CARGA PRODUCTO RANDOM
fetch(`https://dummyjson.com/products/${randomId}`)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      let discoverLink = document.querySelector(".izquierda .botonVerMas");
      discoverLink.href = `./product.html?id=${data.id}`;
  })
  .catch(function (error) {
      console.log('El error es: ' + error);
  });
// RECUADROS POR PRODUCTO
function cargarProductos(categoria, contenedorId) {
  fetch(`https://dummyjson.com/products/category/${categoria}`)
    .then(response => response.json())
    .then(data => {
      let contenedor = document.getElementById(contenedorId);

      data.products.slice(0,10).forEach(producto => { //limitamos la cantidad de productos a 10
        contenedor.innerHTML += `
          <article>
              <img class="album" src="${producto.thumbnail}" alt="${producto.title}">
              <div class="textoArriba">
                <h4>${producto.title}</h4>
                <p>${producto.description}</p>
              </div>
              <div class="textoAbajo">
                <h4 class="precio">$${producto.price}</h4>
                <a class="botonVerMas" href="./product.html?id=${producto.id}">VER MÁS</a>
              </div>
            </article>
          `;
      });
    })
    .catch(error => console.error("Error al cargar productos:", error));
}

// Cargar productos para diferentes categorías
cargarProductos("smartphones", "productosSeccion1");
cargarProductos("kitchen-accessories", "productosSeccion2");
