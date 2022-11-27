
//Crie um programa que peça um input de número para o usuário. 
//Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.
const tabuada = (numero) => {
    numero = prompt('Digite um número')
    let i = 0;
    for(let i = 0; i < 11; i++){
        console.log(`
        ${numero*i} 
        `);
    }
}
tabuada()

