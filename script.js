function Tarefa(descricao, prioridade) {
  this.descricao = descricao;
  this.prioridade = prioridade;
  this.concluida = false;

  
  this.concluir = function() {
    this.concluida = true;
    console.log(`Tarefa "${this.descricao}" concluída!`);
  };
}


const primeiraTarefa = new Tarefa("Estudar JavaScript", "Alta");


primeiraTarefa.concluir();
