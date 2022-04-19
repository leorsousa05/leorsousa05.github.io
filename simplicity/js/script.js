const formulario = document.querySelector("form");
const inputCep = formulario.querySelector("#cep");
const inputTelefone = formulario.querySelector("#telefone");
const inputEndereco = formulario.querySelector("#endereco");
const inputBairro = formulario.querySelector("#bairro");
const inputCidade = formulario.querySelector("#cidade");
const inputEstado = formulario.querySelector("#estado");
const bStatus = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep");

botaoLocalizar.addEventListener('click', function(event) {
    event.preventDefault();
    // Entre no site: viacep.com.br

    /* Pegar o cep digitado */
    let cep = inputCep.value;

    /* CEP no padrão da API */
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    
    /* Ajax: Comunicação Assíncrona com
    o ViaCep usando a função chamada fetch. */

    // 1) Fazer conexão com API (ou acessar)
    fetch(url)

        // 2) E então, Recupere a resposta do acesso no formato JSON
        .then(resposta => resposta.json())

        // 3) E então, mostre os dados
        .then( dados => {
            if ('erro' in dados) {
                bStatus.innerHTML = "CEP não encontrado!"
                inputCep.focus()
            } else {
                bStatus.innerHTML = "CEP encontrado!";
                inputEndereco.value = dados.logradouro
                inputBairro.value = dados.bairro;
                inputCidade.value = dados.localidade
                inputEstado.value = dados.uf
            }
            console.log(dados);
            inputEndereco.value = dados.logradouro;
        });
});

/* Lib VanillaMask: 
https://github.com/vanilla-masker/vanilla-masker*/

VMasker(inputCep).maskPattern("99999-999");
VMasker(inputTelefone).maskPattern("(99) 99999-9999");


/* Programação do contador de caracteres
do campo mensagem */
const spanMaximo = formulario.querySelector("#maximo");
const bCaracteres = formulario.querySelector("#caracteres");
const textMensagem = formulario.querySelector("#mensagem");

let quantidade = 100;

// Evento para detectar a digitação (Entrada) no campo
textMensagem.addEventListener('input', function() {
    let total = quantidade - textMensagem.value.length;
    bCaracteres.textContent = total
    if (total == 0) {
        textMensagem.style.boxShadow = '0 0px 6px red';
        bCaracteres.style.color = 'red'
    } else {
        textMensagem.style.boxShadow = 'none';
        bCaracteres.style.color = 'black'
    };
});

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
        } else {
        response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
            }
        })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
    }
form.addEventListener("submit", handleSubmit)