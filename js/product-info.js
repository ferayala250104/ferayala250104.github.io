let productInfo = [];
let comments = [];
let prodsRel = [];
let imgs = [];
let getProdID = localStorage.getItem("prodID");
const PRODUCTS_INFO_URL = `${PRODUCT_INFO_URL}${getProdID}${EXT_TYPE}`;  //URL de la info
const PRODUCTS_COMMENTS = `${PRODUCT_INFO_COMMENTS_URL}${getProdID}${EXT_TYPE}`;  //URL de los comentarios



//Mostar información del producto
function mostrarInfoProd(array) {

    let infoProductos = "";
    let infoProducto = array;

    infoProductos += `
        <h3>${infoProducto.name}</h3>
        <hr>
        <h5>Precio</h5>
        <p>${infoProducto.currency} ${infoProducto.cost}</p>
        <hr>
        <h5>Descripción</h5>
        <p>${infoProducto.description}</p>
        <hr>
        <h5>Categoría</h5>
        <p>${infoProducto.category}</p>
        <hr>
        <h5>Cantidad de vendidos</h5>
        <p>${infoProducto.soldCount}</p>
        <hr>
        <h5>Imágenes del producto</h5>`


 document.getElementById("product-info").innerHTML = infoProductos;
    

}

//Mostrar las imágenes del producto
function mostrarIMG(array){    

        let contenidoHTML = "";
        for(let i = 0; i < array.length; i++ ){
            
        let prodIMG = array[i]   

          contenidoHTML += `
              <img style="width: 400px" src="${prodIMG}">
          ` 
    
         
        console.log(imgs)
        }

        document.getElementById("images").innerHTML = contenidoHTML;

    }


    function mostrarComentarios(comments) {

        let comentarios = "";
            for (let i = 0; i < comments.length; i++) {
                let comentario = comments[i];
            
                comentarios += `

                <div class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1">${comentario.user} - Puntuación: ${scoreStars()}</h6>
                                <small class="text-muted">${comentario.dateTime}</small>
                            </div>
                            <p class="mb-1">${comentario.description}</p>
                        </div>
                    </div>
                </div>

                `
    function scoreStars() {

        let n = comentario.score
        let estrellas = `<span class="fa fa-star checked"></span>`.repeat(n);
        return estrellas;

    }





    document.getElementById("comments").innerHTML = comentarios;


    }


}



function mostrarProdsRelacionados(prodsRel){


    let htmlContentToAppend = "";
    for(let i = 0; i < prodsRel.length; i++){
        
      let prod = prodsRel[i];
    
        
            htmlContentToAppend += `

            <div class="card" style="width:200px">
              <img class="card-img-top" src="${prod.image}">
                <div class="card-body">
                  <h4 class="card-title">${prod.name}</h4>
                </div>
            </div>      
    
    `

    //Redirigir al producto relacionado
    document.getElementById("prods-relacionados").addEventListener("click", function(){

        localStorage.setItem("prodID", prod.id)
        window.location = "product-info.html";

   });

        }
    
       document.getElementById("prods-relacionados").innerHTML = htmlContentToAppend;
        
    }   
    





document.addEventListener("DOMContentLoaded", function () {

    getJSONData(PRODUCTS_INFO_URL).then(function (resultado) {
            if (resultado.status == "ok") {
                productInfo = resultado.data;
                prodsRel = resultado.data.relatedProducts;
                imgs = resultado.data.images;
                mostrarInfoProd(productInfo);
                mostrarProdsRelacionados(prodsRel);
                mostrarIMG(imgs);
            } else {
                alert(resultado.data);
    }



    });


    getJSONData(PRODUCTS_COMMENTS).then(function (result) {
        if (result.status == "ok") {
            comments = result.data;
            mostrarComentarios(comments);
        } else {
            alert(result.data);
    }

    }); 
                                

});
