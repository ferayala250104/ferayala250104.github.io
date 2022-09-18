let productInfo = [];
let comments = [];
let getProdID = localStorage.getItem("prodID");
const PRODUCTS_INFO_URL = `${PRODUCT_INFO_URL}${getProdID}${EXT_TYPE}`;  //URL de la info
const PRODUCTS_COMMENTS = `${PRODUCT_INFO_COMMENTS_URL}${getProdID}${EXT_TYPE}`;  //URL de los comentarios




function mostrarInfoProd(productInfo){

    let infoProductos = "";
    for(let i = 0; i < productInfo.length; i++){
        let infoProducto = productInfo[i];
        

        infoProductos += ` 
        <div class="list-group-item list-group-item-action cursor-active">
    <div class="row">
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${infoProducto.name}
            </h5>
                <small class="text-muted">${infoProducto.category}</small>
    </div>
        <p class="mb-1">${infoProducto.description}</p>
        </div>
    </div>
</div>
`
    }
    document.getElementById("product-info").innerHTML = infoProductos;

}


function mostrarComentarios(comments){
    
    let comentarios = "";
    for (let i = 0; i < comments.length; i++){
    let comentario = comments[i];
    
    
    comentarios += `
    <div class="list-group-item list-group-item-action cursor-active">
    <div class="row">
    <div class="col">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${comentario.user} - Puntuación: ${scoreStars()}</h5>
                <small class="text-muted">${comentario.dateTime}</small> 
    </div>
        <p class="mb-1">${comentario.description}</p>
        </div>
    </div>
</div>

    ` 
    function scoreStars(){
        let n = comentario.score
        let estrellas = `<span class="fa fa-star checked"></span>`.repeat(n);
        return estrellas;
    
    }
}
    document.getElementById("comments").innerHTML = comentarios;


}



document.addEventListener("DOMContentLoaded", function() {

    getJSONData(PRODUCTS_INFO_URL).then(function(resultado){
        if (resultado.status == "ok"){
            productInfo = resultado.data;
            mostrarInfoProd(productInfo);
        } else {
            alert(resultado.data);
            
        }
        
        getJSONData(PRODUCTS_COMMENTS).then(function(result){
            if (result.status == "ok"){
                comments = result.data;
                mostrarComentarios(comments);
            } else {
                alert(result.data);   
            }    
            
        });
        
    });


    document.getElementById("buttonEnviar").addEventListener("click", function(){

        if(estrellitas > 5 || estrellitas < 1){
            alert("Tu puntuación debe ser del 1 al 5")
        }

    });

});

