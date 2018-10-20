// ----------- PRIMEIRA SOLUÇÃO -----------

//"puxa" os elementos input e botao e coloca eles numa const
const inputEmail = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener('click', function(event) {
    event.preventDefault();
    const spanCriado = document.createElement("span"); //cria o elemento span
    const conteudoProSpan = document.createTextNode("Seu e-mail foi cadastrado com sucesso."); //cria o conteúdo
    spanCriado.appendChild(conteudoProSpan); //vincula o elemento span ao conteúdo
    const newsletterForm = document.querySelector(".news__form"); // pega o elemento form através da class
    newsletterForm.insertBefore(spanCriado, inputEmail.parentNode); //
    spanCriado.style.color = "yellow";
    spanCriado.style.display = "block";
    spanCriado.style.marginBottom = "30px";
});

/*

----------- ÁRVORE DOS ELEMENTOS DA PRIMEIRA SOLUÇÃO -----------

<div class="news">
    <h1 class="news__title" id="formTitle"></h1>
    <form action="" class="news__form">
        <div class="news__form-group">                                                                      <=== 2) ESSE É O PAI DO inputEmail (elementoPai)
            <label for="newsInputEmail" class="news__label"></label>                                                                                                                    <=== 3) É AQUI QUE ENTRA O spanCriado
            <input type="email" class="news__input" id="newsInputEmail" placeholder="email@exemplo.com.br"> <=== 1) ESSE É O inputEmail
        </div>
        <div class="news__form-group">
            <button class="button news__button"></button>
        </div>
        </form>
    </div>



----------- SEGUNDA SOLUÇÃO -----------

botao.addEventListener('click', function(event) {
    event.preventDefault();
    const spanCriado = document.createElement("span"); //cria o elemento span
    const conteudoProSpan = document.createTextNode("Seu e-mail foi cadastrado com sucesso."); //cria o conteúdo
    spanCriado.appendChild(conteudoProSpan); //vincula o elemento span ao conteúdo
    const elementoPai = inputEmail.parentNode; // "o parentNode do inputEmail, que é a div #news__form-group, será chamado elementoPai"
    console.log(elementoPai);
    elementoPai.insertBefore(spanCriado, inputEmail); //
    spanCriado.style.color = "yellow";
    spanCriado.style.display = "block";
    spanCriado.style.marginBottom = "30px";
});


----------- ÁRVORE DOS ELEMENTOS DA SEGUNDA OPÇÃO -----------

<div class="news">
    <h1 class="news__title" id="formTitle"></h1>
    <form action="" class="news__form">
        <div class="news__form-group">                                                                      <=== 2) ESSE É O PAI DO inputEmail (elementoPai)
            <label for="newsInputEmail" class="news__label"></label>        
                                                                                                            <=== 3) É AQUI QUE ENTRA O spanCriado
            <input type="email" class="news__input" id="newsInputEmail" placeholder="email@exemplo.com.br"> <=== 1) ESSE É O inputEmail
        </div>
        <div class="news__form-group">
            <button class="button news__button"></button>
        </div>
        </form>
    </div>

*/