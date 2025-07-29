/***************************************************************
*Objetivos: Iniciar os primeiros comandos em Node.js
*Autor: Guilherme Moreira
*Data: 29/07/2025
*Versão: 1.0
****************************************************************/

//import d bibliotéca para fazer a entrada de daddos via terminal 
//(irémos utilizar ela de forma provisória)
var readline = require('readline')

//criando um objeto de entrada de dados para captar ou printar dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu nome:', function(nome){
    var nomeUsuario = nome

    if(nomeUsuario == ''){
        console.log('Não foi possivel processar a solicitação')
    }else{
        //String() -> converte um objeto em String
        //toUppercase() -> converte o conteudo de uma String em MAIUSCULO
        console.log('O nome digittado foi: ' + String(nomeUsuario).toUpperCase())
        console.log(nome)
    }

    entradaDeDados.close() /* fecha a interface de entrada de dados via terminal */
})

/*
console.log('Aula 01 de Node.JS')

// declarando uma váriavel (var)
var nome = '011'

//exemplo de concatenação de dados(simbolo de (+))
console.log('O nome digitado foi ' + nome)

//exemplo de comcatenação de método reduzido
console.log(`O nome digitado foi ${nome}`)

//typeof -> permite mostrar o tipo de dados de um objeto ou váriavel
console.log(typeof(nome))

*/