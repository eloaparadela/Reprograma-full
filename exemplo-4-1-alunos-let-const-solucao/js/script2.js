
window.addEventListener("load", function(){
    imprimeTabelaDoHTML();
})
// 


function imprimeTabelaDoHTML(){
    const todosOsAlunos = document.querySelectorAll(".aluno");


    todosOsAlunos.forEach (function(aluno){
        let PrimeiraNota = aluno.querySelector(".info-notaum").textContent;
        const SegundaNota = aluno.querySelector(".info-notadois").textContent;
    
        let mediaCalculada = calculaMedia(PrimeiraNota, SegundaNota);
             if (mediaCalculada < 5) {
                aluno.classList.add("abaixo-da-media");
            }
           const mediaFinal = mediaCalculada.toFixed(2);
            aluno.querySelector(".info-media").textContent= mediaFinal;

    })

}

function calculaMedia(notaUmRecebida, notaDoisRecebida) {
    return (parseFloat(notaUmRecebida) + parseFloat(notaDoisRecebida)) / 2;
}

imprimeTabelaDoHTML();