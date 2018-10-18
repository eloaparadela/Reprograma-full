// let $ = document.querySelector

// $(".xuxu");
// $("#xuxu");
// let xuxu = document.getElementById("xuxu");

// let xaxa=$("#xaxa").val();
// console.log(xaxa);

// let btnSubmit= document.getElementById("btn");
// let btnSubmit= $("#btn");
 $(document).ready(function(){


// $("#btn").click(function(event){
//         event.preventDefault();
//         appendinsere($("#xuxu").val());
//         contador();
//     });

    $("#btn").click(function(e){
        e.preventDefault();
        $("#xuxu").val();
        insere();
        document.querySelector("#pudim").reset();
         
     });
     
     function insere(){ // div de inserir tweet
         $(".tuites").prepend(`
         <div class="p-3 mb-2 bg-light text-dark">
         <p class="text-warning" id="pezinho">${$("#xuxu").val()}</p> 
         <p> ${Chamar()} </p>
         </div>
      `

     )
     
     }
     
     function contador(){
          let Sobrando= 200 - $("#xuxu").val().length;
          if(Sobrando < 0){ // mudar cor do texto de acordo com o n de caracteres
              $("#xuxu").css("color", "red");
              return $("#contador").text(`Você ultrapassou ${Sobrando} caracteres do limite`);
          }
          else{
            if( Sobrando >= 0 && Sobrando <= 50){
              $("#xuxu").css("color", "orange");
          }
            else if( Sobrando > 50 && Sobrando <=100){
              $("#xuxu").css("color", "yellow");
          }
           else{
                 $("#xuxu").css("color", "black");
          }
           return $("#contador").text(`Você ainda tem ${Sobrando} caracteres`);
        }
     }

      $("#xuxu").keyup(function(){
        contador();
      })
         

      function Data(date){ // add data no tweet
          const meses = ["jan", "feb", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
          let day = date.getDate();
          let year= date.getFullYear();
          let month= date.getMonth();
          return `${day} / ${meses[month]} / ${year}`

      }
     function Chamar(){
         return Data(new Date());
     }

    //  function MudarCor(){
    //      let Chamar= document.querySelector("#xuxu");

    //      if(Chamar.length.val() === 10){
    //         document.getElementById("#xuxu").style.color = "red";
    //      }
    //  }


 })
 

// let divInserir= document.querySelector(".tuites");
//  divInserir.innerHTML = `
//  <p id="pezinho">${$("#xuxu").val()}</p>
//  `

//.click / .val / prepend

// btnSubmit.addEventListener("click", function(e){
//     e.preventDefault();
// })