var resposta = (prompt('Deseja comer mais?')).toLowerCase()
let totalConta = 0;
while(resposta !='n'){
    totalConta = totalConta + 2.50; 
    var resposta = (prompt('Deseja comer DE NOVO?')).toLowerCase()
}
alert(`Sua conta total é ${totalConta}`)
