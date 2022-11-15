/*const idadeDependente =  prompt('Solicitação de dependente \n Qual a idade do dependente?')

if(idadeDependente >=13){
    if(idadeDependente <18){
        console.log('Seu dependente já pode ter um cartão vinculado ao seu. ')
    }else{
    console.log('O dependente já pode ter seu próprio cartão! ')
    }

}else{    
    console.log('Consulte outras possibilidades do Labank')
}

if(idadeDependente >=13 && idadeDependente <= 17){
    console.log('Seu dependente já pode ter um cartão vinculado ao seu. ')
}else{
    console.log('Consulte outras Possibilidades. ')
}

idadeDependente ===13 ? console.log('A idade do dependente é 13 e ele já pode ter um cartão. ') : console.log('Consulte outras opções')
 
const idade = Number(prompt('Digite sua idade:'))
if (idade >=18) {
const escolhaCartao = Number(prompt('Solicitação de crédito \n Digite a opção desejada: \n 1- Fácil \n 2- Black \n 3- Platium \n 4- MasterGold'))

switch (escolhaCartao) {
    case 1:
        console.log('Cartão fácil adquirido!')    
    //alguma coisa
        break
    case 2:
        console.log('cartão black adquirido')
        // outra coisa
        break
    case 3:
        console.log('Cartao platium adquirido!')
        break    
    default:
        console.log('Escolha uma das opções disponíveis.')
                //caso padrao

}
}else{
    console.log('O usuario ainda é menor de idade e nao pode ter um cartão')
}
*/

const numero = Number(prompt('Digite um número:'))
if(numero % 2 === 0){ 
    if(numero % 3 === 0){
    console.log('O número escolhido é divisível por 2 e 3')
}else{
    console.log('Este número nao se divide por 2 e 3')
}
}