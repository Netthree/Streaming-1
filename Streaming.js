let prompt = require("prompt-sync")();

let usuario = prompt("Para iniciarmos o seu cadastro crie um usuário: ");
let senhaUsuario = prompt("Agora crie uma senha: ");

let usuariov = prompt("Agora no login digite o seu usuário: ");
let senhav = prompt("Digite a senha: ");

if (senhav === senhaUsuario) {
  console.log("Entrando.......");
} else {
  console.log("Senha incorreta.");
}
