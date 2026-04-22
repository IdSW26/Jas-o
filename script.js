function trazDado(){
    fetch("dados.json")
    .then(response => response.json())
    .then(dadinho =>{
        document.getElementById("vemDado").innerText =
        "| Nome: " + dadinho.nome + " | Idade: " + dadinho.idade + " | Cidade: " + dadinho.cidade + " |";
    })
}