const botao = document.querySelector('button')
const valorReal = document.querySelector('.valor')
const valorOutros = document.querySelector('.valor2')
const selectFirst = document.querySelector('.primeiro')
const selectSecond = document.querySelector('.segundo')

function conversao() {
    const inputvalue = document.querySelector('.input').value
    const dolar = 5.39
    const libra = 6.13
    const euro = 6.02

    const codigosMoeda = { // pt 1/3 
        real: 'BRL',
        dolar: 'USD',
        libra: 'GBP',
        euro: 'EUR'
    };

    // MOSTRAR O VALOR DIGITADO COM A MOEDA DA PRIMEIRA OPÇAO (SEM CONVERTER) PT 2/3
    const codigo = codigosMoeda[selectFirst.value];

    // USADO PARA TROCAR A PARTE DE CIMA DO CODIGO SEM ALTERAR O VALOR DO INPUT NA IMAGEM REFERENTE A MOEDA SELECIONADA PT 3/3 
    valorReal.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: codigo
    }).format(inputvalue);

    if (selectSecond.value == 'dolar') {
        valorOutros.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputvalue / dolar)
    }

    if (selectSecond.value == 'euro') {
        valorOutros.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputvalue / euro)
    }

    if (selectSecond.value == 'libra') {
        valorOutros.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputvalue / libra)
    }

    if (selectSecond.value == 'real') {
        valorOutros.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'Brl'
        }).format(inputvalue)
    }
}



function changeSecond() {
    const name = document.querySelector('.name2')
    const img2 = document.querySelector('.europa')


    if (selectSecond.value == 'dolar') {
        name.innerHTML = 'Dolar Americano'
        img2.src = './assets/USA.png'
    }

    if (selectSecond.value == 'euro') {
        name.innerHTML = 'Euro'
        img2.src = './assets/euro.png'
    }

    if (selectSecond.value == 'libra') {
        name.innerHTML = 'Libra'
        img2.src = './assets/libra 1.png'
    }

    if (selectSecond.value == 'real') {
        name.innerHTML = 'Real'
        img2.src = './assets/brasil 2.png'
    }

}

function changeFirst() {
    const name1 = document.querySelector('.name')
    const img1 = document.querySelector('.america')

    if (selectFirst.value == 'libra') {
        name1.innerHTML = 'Libra'
        img1.src = './assets/libra 1.png'
    }
 
    if (selectFirst.value == 'dolar') {
        name1.innerHTML = 'Dolar Americano'
        img1.src = './assets/USA.png'
    }

    if (selectFirst.value == 'euro') {
        name1.innerHTML = 'Euro'
        img1.src = './assets/euro.png'
    }

    if (selectFirst.value == 'real') {
        name1.innerHTML = 'Real'
        img1.src = './assets/brasil 2.png'
    }





}



selectFirst.addEventListener('change', changeFirst)
selectSecond.addEventListener('change', changeSecond)
botao.addEventListener('click', conversao)