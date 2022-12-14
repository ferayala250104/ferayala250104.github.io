const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
/***** Agregado *****/
const AUTOS101_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
let getItemID = localStorage.getItem("userID");
let documento = document.getElementById("userID");
/*****...*****/

//Mostrar en barra de navegación el usuario o email. Agregué <p> con respectivo id en todos los html para que se visualizara en cada pantalla.
documento.innerHTML = getItemID;


//Redirigir a pantalla de inicio al apretar "Cerrar Sesión"
document.addEventListener("DOMContentLoaded", function(){

   document.getElementById("close-session").addEventListener("click", function(){

      localStorage.removeItem("userID");
      window.location = "index.html"

   });

});



let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
