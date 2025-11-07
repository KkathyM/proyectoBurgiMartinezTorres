fetch("https://dummyjson.com/products/category-list")
  .then((res) => res.json())
  .then((data) => {
    const categoryMenu = document.querySelector(".listaCategorias");
    let categoriesHtml = "";
    for (let i = 0; i < data.length; i++) {
      categoriesHtml += `
        <li><a href="./category.html?category=${(data[i])}">${data[i]}</a></li>
      `;
    }
    categoryMenu.innerHTML = categoriesHtml;
  })
  .catch((err) => console.error("Error fetching categories:", err));

function url(apiUrl) {
  return apiUrl;
}
