function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista'){
        comprarPista(qtd);
    }else if(tipo.value == 'superior'){
        comprarSusperior(qtd);

    }else{
        comprarInferior(qtd);

    }
}
function comprarPista(qtd){
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        if(qtd > qtdPista){
            alert('Quantidade indisponível para o tipo de pista');
        }else{
            qtdPista -= qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra realizada com sucesso!');
        }
    }

function comprarSusperior(qtd){

        let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if(qtd > qtdSuperior){
            alert('Quantidade indisponível para o tipo de superior');
        }else{
            qtdSuperior -= qtd;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
            alert('Compra realizada com sucesso!');
        }
}

function comprarInferior(qtd){

         let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if(qtd > qtdInferior){
            alert('Quantidade indisponível para o tipo de inferior');
        }else{
            qtdInferior -= qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            alert('Compra realizada com sucesso!');
        }
}