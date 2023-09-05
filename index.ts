const reportAcudits = [];

function mostrarChiste() {
    const opcion = {
       method : "GET",
       headers : {
        "Accept" : "application/json"
       }
    }
    fetch("https://icanhazdadjoke.com", opcion)
    .then (res => res.json())
    .then (response => {
        const chiste = document.getElementById("chiste");
        chiste.textContent = response.joke;
        const votacion = document.getElementById("votacion");
        votacion.classList.remove("d-none");
    });
}

function votarChiste(puntuacion) {
    const fecha = new Date().toISOString();
    const report = {
        broma: chiste, 
        puntuacion: puntuacion,
        fecha: fecha
    };
    reportAcudits.push(report);
    console.log(reportAcudits);
    mostrarChiste();
}



