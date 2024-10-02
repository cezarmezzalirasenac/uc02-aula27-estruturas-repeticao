// mostrar o nome do mês com base no número do mês

const nomesMeses = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
]

const mes = prompt("Informe o mês")
const numeroMes = Number(mes)

let mensagem = "Mês Inválido"

if ((numeroMes != NaN) && (numeroMes > 0) && (numeroMes <= 12)) {
  mensagem = `${nomesMeses[numeroMes - 1]} é o mês de número ${numeroMes}`
} else {
  for (let index = 0; index < nomesMeses.length; index++) {
    if (mes.toLowerCase() === nomesMeses[index].toLowerCase()) {
      mensagem = `${mes} é o mês de número ${index + 1}`
      break
    }
  }
}

console.log(mensagem)

