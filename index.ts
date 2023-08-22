

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
    });
}