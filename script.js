const jogos = [];

function adicionarJogo() {

    let nomedojogo = document.getElementById("nomeJogo").value;
    let generodojogo = document.getElementById("generoJogo").value;
    let nota = document.getElementById("notaJogo").value;

    if (nomedojogo === "" || generodojogo === "" || nota === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let novoJogo = {
        nome: nomedojogo,
        genero: generodojogo,
        nota: nota
    };

    jogos.push(novoJogo);

    mostrarJogos();

    document.getElementById("nomeJogo").value = "";
    document.getElementById("generoJogo").value = "";
    document.getElementById("notaJogo").value = "";
}


function mostrarJogos() {

    let texto = "";

    for (let i = 0; i < jogos.length; i++) {

        texto += "<div class='jogo'>";
        texto += "<h3>" + jogos[i].nome + "</h3>";
        texto += "<p>Gênero: " + jogos[i].genero + "</p>";
        texto += "<p>Nota: " + jogos[i].nota + "</p>";
        texto += "</div>";

    }

    document.getElementById("listaJogos").innerHTML = texto;
}


function removerJogo() {

    if (jogos.length === 0) {
        alert("Não existem jogos cadastrados!");
        return;
    }

    jogos.pop();

    mostrarJogos();
}
