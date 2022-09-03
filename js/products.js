let listaProd = []; 
let max = undefined;
let min = undefined;
let getCatID = localStorage.getItem("catID");
const LISTADO_PRODUCTOS_URL = `${PRODUCTS_URL}${getCatID}${EXT_TYPE}`;




function mostrarListaProductos(listaProd){

    let htmlContentToAppend = "";
    for(let i = 0; i < listaProd.length; i++){
        
      let product = listaProd[i];
    
        console.log(typeof max)
        console.log(typeof product.cost)
        console.log(typeof min)

      if ((min == undefined && max == undefined) || 
          (product.cost >= min && product.cost <= max) || 
          (product.cost >= min && max == undefined) || 
          (product.cost <= max && min == undefined)){

          htmlContentToAppend += `

          <div (${product.id})" class="list-group-item list-group-item-action cursor-active">
          <div class="row">
              <div class="col-3">
                  <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
              </div>
              <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                      <h4 class="mb-1">${product.name}</h4>
                      <small class="text-muted">${product.soldCount} artículos</small>
                  </div>
                  <p class="mb-1">${product.cost}  ${product.currency}</p>
              </div>
          </div>
      </div>

                    `
        }
        
        
    } 
       document.getElementById("list-products").innerHTML = htmlContentToAppend;
       console.log(listaProd);
    }


    
    

    document.addEventListener("DOMContentLoaded", function(e) {
        getJSONData(LISTADO_PRODUCTOS_URL).then(function(result){
            if (result.status == "ok"){
                listaProd = result.data.products;
                mostrarListaProductos(listaProd);
            } else {
                alert(result.data);
                
            }
            
            
        });

        document.getElementById("mayMen").addEventListener("click", function(){
            listaProd.sort(function(a, b){
                return parseInt(b.cost) - parseInt(a.cost);
            });
            mostrarListaProductos(listaProd);
        });

        document.getElementById("menMay").addEventListener("click", function(){
            listaProd.sort(function(a,b){
                return parseInt(a.cost) - (b.cost);
            });
            mostrarListaProductos(listaProd);
        });

        document.getElementById("relArt").addEventListener("click", function(){
            listaProd.sort(function(a, b){
                return parseInt(b.soldCount) - parseInt(a.soldCount);
            });
            mostrarListaProductos(listaProd);
        });

        document.getElementById("clear-filter").addEventListener("click", function(){
            document.getElementById("filter-min").value = "";
            document.getElementById("filter-max").value = "";
            
            min = undefined;
            max = undefined;
    
            mostrarListaProductos(listaProd);
        });

        document.getElementById("filter-count").addEventListener("click", function(){
            
            if (document.getElementById("filter-min").value != ""){
            min = parseInt(document.getElementById("filter-min").value);
            } else {
                min = undefined;
            }

            if (document.getElementById("filter-max").value != ""){
                max = parseInt(document.getElementById("filter-max").value);
            } else {
                max = undefined;
            }
    
            
            mostrarListaProductos(listaProd);
        });
        
    }); 
