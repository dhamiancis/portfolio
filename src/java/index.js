



// OBJETIVO - quando  clicarmos na AbstractRange, temos que mostrar o
// conteúdo da aba que foi clcicado pelo usúario 
// e esconder o conteúdo anterior

// -passo 1- dar um jeito de pegar o elemetnos que representam as abas no html

// - passo 2 - dar um jeito de indentificar o clique no elemento da aba 

// -passo 3 -o usuarios clicar desmarcar a aba selecionada

// -paaso 4- marcar aba clicands como selecionada

// -passso 5- esconder conteudo anterior

// -passo 6- mostrar o conteudoda aba selecionada

// -passo 1- dar um jeito de pegar o elemetnos que representam as abas no html
const abas = document.querySelectorAll(".aba");
console.log(abas);



// - passo 2 - dar um jeito de indentificar o clique no elemento da aba 
abas.forEach(aba=>{

    aba.addEventListener("click", function(){
        
        if(aba.classList.contains("selecionada")){
            return
        }
    
        selecionarAba(aba)
        mostrarInformacao(aba)

    })

                                                                                                                                                                                                                                

})

function selecionarAba(aba){

    // -passo 3 -o usuarios clicar desmarcar a aba selecionada
    // -demarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionada");
    //  console.log(abaSelecionada);

    abaSelecionada.classList.remove("selecionada");
 
    // -paaso 4- marcar aba clicands como selecionada
    // -selecionada
    aba.classList.add("selecionada");

}

function mostrarInformacao(aba){

    // -passso 5- esconder conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");

    //  console.log(informacaoselecionada)
    informacaoSelecionada.classList.remove("selecionada");

    // -passo 6- mostrar o conteudoda aba selecionada

    // console.log(aba.id)
    const idDoElementoDaInformacaoDaAba = `informacao-${aba.id}`;
    console.log(idDoElementoDaInformacaoDaAba);

    const informacaoASerMostrada = document.getElementById(idDoElementoDaInformacaoDaAba);
    informacaoASerMostrada.classList.add("selecionada");

}