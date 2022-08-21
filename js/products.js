let listaAutos = [];

function mostrarListaAutos(listaAutos){

    let htmlContentToAppend = "";
    for(let i = 0; i < listaAutos.length; i++){
        let products = listaAutos[i];

          htmlContentToAppend += ` 
            <div>${products.id}</div>
                        <img src="${products.image}" alt="${products.description}">
                    </div>
                            <h4>${products.name}</h4>
                            <small>${products.soldCount} artículos</small>
                        </div>
                        <p>${products.cost}</p>
                    </div>
                </div>
            </div> 
            `
        }

        document.getElementById("lista-autos").innerHTML = htmlContentToAppend;
    }

    document.addEventListener("DOMContentLoaded", function(e) {
        getJSONData(AUTOS101_URL).then(function(result){
            if (result.status === "ok"){
                listaAutos = result.data;
                mostrarListaAutos(listaAutos);
            } else {
                alert(result.data);
                
            }
        })
    }); 
