// let $ = document.querySelector

// $(".xuxu");
// $("#xuxu");
// let xuxu = document.getElementById("xuxu");

// let xaxa=$("#xaxa").val();
// console.log(xaxa);

// let btnSubmit= document.getElementById("btn");
// let btnSubmit= $("#btn");
 
$("#btn").click(function(e){
   e.preventDefault();
   $("#xuxu").val();
   insere();
    
});

function insere(){
 let divInserir= document.querySelector(".tuites");
 divInserir.innerHTML = `
 <p id="pezinho">${$("#xuxu").val()}</p>
 `

}


// btnSubmit.addEventListener("click", function(e){
//     e.preventDefault();
// })