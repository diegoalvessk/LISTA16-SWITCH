/*
1. Crie uma função que solicite dois valores ao usuário, um nome e uma senha e
guarde cada um no seu respectivo array.

2. Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer
login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a
opção escolhida pelo usuário.

3. Crie uma função de login e recebe dois valores como parâmetro, um nome e uma
senha, depois procure o nome recebido no array de nomes e em caso positivo
compare a senha no array de senhas. Se as duas comparações forem válidas
retorne true se uma delas não for válida retorne false.

4. Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
então procure pelo nome no array de nomes e exclua ele e a senha correspondente
do outro varray, por fim organize o array para eliminar os espaços vazios.

5. Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere
que o usuário pode escolher quando encerrar o programa conforme as opções e
que no login caso seja bem sucedido retorna uma mensagem “Login feito com
sucesso!” e em caso negativo “Nome ou senha incorretos!
*/

let senhas = []
let nomes = []
let indexGeral = 0
let condicao = "0"
let senha = 0
let nome = 0
let resultado = false
let posicao = 0

DesejaFazer(condicao)

function NomeSenha(senhas, nomes){
    nomes[indexGeral] = prompt("Informe seu nome.")
    senhas[indexGeral] = prompt("Informe sua senha.")
    indexGeral++
    console.log(nomes, senhas)
    DesejaFazer(condicao)

}

function Login(senha, nome){
    for (let index = 0; index < nomes.length; index++) {
        if(nome == nomes[index]){
            if(senha == senhas[index]){
                alert("Login realizado com sucesso")
            }else{
                alert("Nome ou senha incorretos!")
            }
        }        
    }
}

function Excluir(nome){
    console.log(nomes)
    for (let index = 0; index < nomes.length; index++) {
        if(nome == nomes[index]){
            posicao = nomes.indexOf(nome)
            nomes.splice(posicao, 1);
            senhas.splice(posicao, 1);
            alert("Exclusão realizada com sucesso.")
        }        
    }
    console.log(nomes, senhas)

}


function DesejaFazer(condicao){

    condicao = prompt("O que você deseja no nosso sistema?" + "\n" 
    + "1 = Cadastrar." + "\n" 
    + "2 = Fazer Login." + "\n" 
    + "3 = Excluir um cadastro." + "\n" 
    + "4 = Finalizar programa.")

    switch (condicao) {
        case "1":
            NomeSenha(senhas, nomes)
            break;
        
        case "2":
            nome = prompt("Informe o nome de login.")
            senha = prompt("Informe a senha de login.")
            console.log(nome, senha)
            Login(senha, nome, resultado)
            DesejaFazer(condicao)
            break;

        case "3":
            nome = prompt("Informe o nome de login.")
            Excluir(nome)
            DesejaFazer(condicao)
            break;

        case "4":
            alert("Obrigado por usar nosso sistema!")
            break;
    
        default:
            alert("Não pussímos nenhuma dessas opções.")
            break;
    }
}

