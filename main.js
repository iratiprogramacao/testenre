let nomeUsuario = prompt("Qual é o seu nome?");
let elemento = document.querySelector("#nome-usuario");


while(nomeUsuario == ""){
  nomeUsuario = prompt("Qual o seu nome?");
}

if(nomeUsuario == null){
  elemento.textContent = "seja muito bem-vindo!";
}
else{
elemento.textContent = nomeUsuario;
}