function Tarefa(descricao, prioridade) {
  this.descricao = descricao;
  this.prioridade = prioridade;
  this.concluida = false; // Por padrão, a tarefa não está concluída
  this.concluir = function () {
    this.concluida = true;
    console.log(`Tarefa "${this.descricao}" concluída!`);
  };
}


const primeiraTarefa = new Tarefa("Estudar JavaScript", "Alta");


const botaoConcluirTarefa = document.getElementById('botao-concluir');

botaoConcluirTarefa.addEventListener('click', function () {
  primeiraTarefa.concluir();
})