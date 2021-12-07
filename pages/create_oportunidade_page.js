const { I } = inject();

module.exports = {

  buttons: {
    oportunidade: "//a[@title='Oportunidades']",
    criar: "//div[text() = 'Criar']",
    avancar: "//button/span[text() = 'Avançar']",
    salvarCriar: "//button[text()='Salvar e criar']",
    fecharJanela: "//button[@title='Fechar esta janela']",
    mostrarAcoes: "//span[text()='Mostrar mais ações']",
    enviarAprovacao: "//button[text()='Enviar para aprovação']",
    enviar: "//span[text()='Enviar']/parent::button",
    macarFaseOptConcluido: "//span[text()='Marcar Fase da oportunidade como concluído(a)']"
  

  },

  filds: {
    valor: "//label[text()='Valor']/following-sibling::div/input",
    nameOportunidade: "//label[text()='Nome da oportunidade']/following-sibling::div/input",
    dataFechamento:"//label[text()='Data de fechamento']/following-sibling::div/input",


},

  seleciona: {
    fase: "//label[text()='Fase']/following-sibling::div//input" ,
    prospecting: "//lightning-base-combobox-item[@data-value='Prospecting']"
  
  
},
  acessaOportunidade(){
    I.waitForElement(this.buttons.oportunidade)
    I.forceClick(this.buttons.oportunidade)
  },

  createOportunidade(){

    I.forceClick(this.buttons.criar) 
  },

  preencherValor(valorOportunidade){
    I.wait(3)
    I.fillField(this.filds.valor,valorOportunidade)
  },

  preencherNome(nomeOportunidade){
    I.fillField(this.filds.nameOportunidade,nomeOportunidade)
  },

  preencherData(dataOportunidade){
    I.fillField(this.filds.dataFechamento,dataOportunidade)
  },

  selecionaFase(){
    I.forceClick(this.seleciona.fase)
    I.forceClick(this.seleciona.prospecting)
  },

  verificaMensagem(mensagemAlerta){

    I.see(mensagemAlerta,"//strong[text()='Revise os seguintes campos']")
  },

  salvarCriar(){
    I.click(this.buttons.salvarCriar)

  },

  fecharJanela(){
    I.waitForElement(this.buttons.fecharJanela,20)
    I.wait(3)
    I.forceClick(this.buttons.fecharJanela)
  
  },
}
