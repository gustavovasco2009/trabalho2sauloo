const jogos = [];


function adicionarJogo() {
     let nomedojogo = document.getElementById(nomeJogo).value
     let generodojogo = document.getElementById(generoJogo).value
     let notaJogo = document.getElementById(notaJogo).value
};


let novoJogo = {
    nome: nome,
    genero: genero,
    nota: nota
};

jogos.push(novoJogo);

function mostrarJogos() {

    let texto = "";

    for (let i = 0; i < jogos.length; i++) {
        texto += "<div class='jogo'>";
        
    }
    
}