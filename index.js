const prompt = require("prompt-sync") ()
const Usuario = require("./class/Usuario")

let usuarios = [];

const nome = prompt("Digite seu nome: ")
const idade = Number(prompt("digite sua idade: "))
const email = prompt("Digite seu email: ")
const ativo = prompt("Usúario ativo?: [S/N]")


const dados = {
  mostrarDados: function() {
    console.log("Aqui estão seus dados!");
  }
}

