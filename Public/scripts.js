async function exibirResultado(){
    const form = document.getElementById('calcForm');
    const formData = JSON.stringify(form);
    fetch('http://localhost:9000/product-register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').innerHTML = 'Resultado: ' + data.resultado;
    })
    .catch(error => console.error('Erro ao calcular dividendos:', error));
}