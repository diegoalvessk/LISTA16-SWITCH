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
NomeSenha(senhas, nomes)
DesejaFazer()

function NomeSenha(senhas, nomes){
    nomes[indexGeral] = prompt("Informe seu nome.")
    senhas[indexGeral] = prompt("Informe sua senha.")
    indexGeral++
}

function DesejaFazer(condicao){
    condicao = prompt("O que você deseja no nosso sistema?" + "\n" 
    + "1 = Cadastrar" + "\n" 
    + "2 = Carrinho de compras" + "\n" 
    + "3 = Finalizar procedimentos" + "\n" 
    + "4 = Finalizar programa.")
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}

