const {I, login, create_oportunidade_page} = inject();
// Add in your custom step files

Given('que eu esteja na ORG e no objeto oportunidades', async () => {
  // From "features\basic.feature" {"line":8,"column":5}
  await login('user')
  I.wait(3)
  create_oportunidade_page.acessaOportunidade()
  I.wait(3)
  
});

When('clicar no botão “Criar”', () => {
  // From "features\basic.feature" {"line":9,"column":5}
  create_oportunidade_page.createOportunidade()
});

When('depois clicar no botão “Salvar e criar”', () => {
  // From "features\basic.feature" {"line":10,"column":5}
  create_oportunidade_page.salvarCriar()
});


Then('o Salesforce não permitirá salvar, apresentará o alerta {string}', (mensagemAlerta) => {
  // From "features\basic.feature" {"line":10,"column":5}
  create_oportunidade_page.verificaMensagem(mensagemAlerta)
});

When('preencher o campo valor {string}', (valorOportunidade) => {
  // From "features\basic.feature" {"line":15,"column":5}
  create_oportunidade_page.preencherValor(valorOportunidade)
});

When('preencher o campo Nome  {string}', (nomeOportunidade) => {
  // From "features\basic.feature" {"line":16,"column":5}
  create_oportunidade_page.preencherNome(nomeOportunidade)
});

When(/^preencher o campo Data de fechamento"(.*?)"$/, (dataOportunidade) => {
  // From "features\basic.feature" {"line":17,"column":5}
  create_oportunidade_page.preencherData(dataOportunidade)
});

When('selecinar a fase prospecting', () => {
  // From "features\basic.feature" {"line":18,"column":5}
  create_oportunidade_page.selecionaFase()
});

Then('A oportunidade deverá ser criada com sucesso.', () => {
  // From "features\basic.feature" {"line":20,"column":5}
  create_oportunidade_page.fecharJanela()
});
