type RequestObject = {
    valor: any,
    tempo: any,
    taxa: any
}

function verificaTipoDosDados(requestinput: any) {
    const typeOfData = typeof requestinput;
    
    (typeOfData !== 'number') && console.error(`O valor ${requestinput} é do tipo ${typeOfData} e não é suportado como número válido.`);
    
    
    return (typeOfData === 'number') ? true : false
}

function verificaRequisicaoVazia(requestData:object) {
    
    return Object.keys(requestData).length === 0 ? true : false
}

function validaRequest(requestData:RequestObject) {

    if(verificaRequisicaoVazia(requestData)){
        throw new Error("Requisição vazia. Favor enviar dados válidos.");
        
    }else{
        const {valor, tempo, taxa} = requestData;
        const valorENumero = verificaTipoDosDados(valor);
        const tempoENumero = verificaTipoDosDados(tempo);
        const taxaENumero = verificaTipoDosDados(taxa);

    if(!valorENumero || !tempoENumero || !taxaENumero){
        throw new Error("Dados inválidos, fornecer apenas números.");
        
    }
    return requestData;}


}

const obj = {
    valor: 8,
    tempo: 9,
    taxa: 5
};


console.log(validaRequest(obj));

export { validaRequest }
