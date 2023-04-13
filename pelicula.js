// https://studio-ghibli-films-api.herokuapp.com/api/My%20Neighbor%20Totoro

let contenido = document.getElementById("contenido");

fetch('https://studio-ghibli-films-api.herokuapp.com/api/My%20Neighbor%20Totoro')
    .then(response => response.json())
    .then(resp => {
        crearCard(resp)
    });




//Acá estara la funcion 'crearTabla'
function crearCard(resp) {
    console.log(resp);
    contenido.innerHTML ="";
    contenido.innerHTML +=
    `
    <div class="card" style="width: 18rem;">
            <img src="${resp.poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 id="titulo" class="card-title">${resp.title}</h5>
                <p id="cuerpo" class="card-text">${resp.synopsis}</p>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Titulo romanizado:</b> ${resp.hepburn}</li>
                    <li class="list-group-item"><b>Año de estreno:</b> ${resp.release}</li>
                    <li class="list-group-item"><b>Director:</b> ${resp.director}</li>
                </ul>
            <div class="card-body">
                <a href="#" class="btn btn-primary">Más información</a>
            </div>
        </div>
    `
   
}


