function mostrarMensagem(){
    alert(
        "O Agro Forte promove tecnologia, produção sustentável e preservação ambiental."
    );
}

function trocarTema(){
    document.body.classList.toggle("dark");
}

function abrirContato(){
    window.location.href =
    "mailto:contato@agroforte.com";
}

function iniciarContador(){

    let numero = 0;

    let contador =
    document.getElementById("contador");

    let intervalo = setInterval(() => {

        numero += 100;

        contador.innerHTML =
        numero.toLocaleString();

        if(numero >= 10000){
            clearInterval(intervalo);
        }

    }, 50);
}