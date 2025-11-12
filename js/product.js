let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
let producto = document.querySelector(".mainproduct")
console.log(id)

fetch(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)

        let tags = "";
        for (let i = 0; i < data.tags.length; i++) {
            tags += `<span class=" hastagg">#${data.tags[i]}</span>`;
        }

        let reviews=  ""
        let cicloreview = data.reviews
        for (let i = 0; i < cicloreview.length; i++) {
            let cadareview = cicloreview[i];
            reviews += `<article class="review">
                    <h4 class ="info">Rating: ${cadareview.rating}</H4>
                    <p class ="info">"${cadareview.comment}"</p>
                    <p class ="info"> ${cadareview.reviewerName}</p>
                    <p class ="info"> ${cadareview.date.slice(0, 10)} </p>
                </article>` ;
            
        }
        let nombre = console.log(data.title);
        producto.innerHTML += `
        <img class="portadaproduct" src="${data.images[0]}" alt="${nombre}">
            <section class="descripcionproduct">
                <h2 class="tituloalbum">${data.title}</h2>
                <h3 class="marcaalbum"><b>Brand:</b> ${data.brand}</h3>
                <p class="descripcionalbum"><b>Description: </b>${data.description}.</p>
                <h3 class="precioalbum"><b>$ ${data.price}</b></h3>
                <h3 class="infoalbum"><b>Category:</b> ${data.category}</h3>
                <h3 class="infoalbum"><b>Stock:</b> ${data.stock}</h3>
                <article class="hastag">
                    ${tags}
                </article>
                <h2 class="tituloalbum">Reviews</h2>
                ${reviews}
            </section>
        `

    })
    .catch(function (error) {
        console.log('El error es: ' + error);
    })
