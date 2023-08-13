const titulo = document.querySelector('.titulo')
const texto = document.querySelector('.texto')
const input = document.querySelector('.input')
const botao = document.querySelector('.botao')
const numeroAleatorio = parseInt(Math.random() * 10)

function conteudo() {
  if(Number(input.value) == numeroAleatorio) {
    titulo.textContent = 'Parabéns!!'
    texto.textContent = `Você acertou o número, que era ${input.value}`
    input.style.display = 'none'
    botao.style.display = 'none'
  } else {
    titulo.textContent = 'Que pena!!'
    texto.textContent = `Você errou o número, ele era ${numeroAleatorio}`
    input.style.display = 'none'
    botao.style.display = 'none'
  }
}

botao.addEventListener('click', conteudo)