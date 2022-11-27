//Crie um array com 5 strings. 
//Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:


const ranking = (maioresPaises) => {
    i = 1;
    maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
    for(let item of maioresPaises){
        console.log(`${i} - ${item}`)
        i = i + 1; 
    }
}

ranking()

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"