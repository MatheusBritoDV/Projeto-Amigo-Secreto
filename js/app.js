let amigos = [];

function adicionar() {
    let regex = /[a-zA-Z]/gm;
    let nomePessoa = document.getElementById("nome-amigo").value;
    let verificaPalavra = [...nomePessoa.matchAll(regex)];
    let listaDeAmigos = document.getElementById("lista-amigos");
    amigos.push(nomePessoa)

    if ( verificaPalavra != ""){
        if (listaDeAmigos.textContent == "") {
            listaDeAmigos.innerHTML = `${nomePessoa}`; 
        } else {
            listaDeAmigos.innerHTML = `${listaDeAmigos.innerHTML}, ${nomePessoa}`; 
        }    
    } else {
        alert("Nao foi digitado nenhum caractere valido");
    }
    document.getElementById("nome-amigo").value = "";
}

function sortear() {
    embaralha(amigos);
    let amigosSorteados = document.getElementById("lista-sorteio");
    if ( amigos != [] && amigos.length >= 4){
        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1){
                amigosSorteados.innerHTML = amigosSorteados.innerHTML + `${amigos[i]} --> ${amigos[0]} <br> `;
            } else {
                amigosSorteados.innerHTML = amigosSorteados.innerHTML + `${amigos[i]} --> ${amigos[i + 1]} <br> `;
            }
        }
    }
}

function embaralha(lista){
    for (let i = lista.length; i ; i--){
        const indiceAleatorio = Math.floor(Math.random() * i);
        [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];
    }
}

function reiniciar(){
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    amigos = [];
} 
