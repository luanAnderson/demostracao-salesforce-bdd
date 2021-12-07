Feature: Business rules
  EU COMO: Usuário ao preencher o campo Valor e os campos obrigatórios de uma oportunidade. 
  DESEJO: salvar e criar uma oportunidade.
  COM O OBJETIVO: Realizar o teste automatizado para equipe Sysmap
  -
  Scenario: Cenario1 -Validar mensagem de erro ao salvar sem os campos obrigatórios.
    Given que eu esteja na ORG e no objeto oportunidades
    When clicar no botão “Criar”
    And depois clicar no botão “Salvar e criar”
    Then o Salesforce não permitirá salvar, apresentará o alerta "Revise os seguintes campos"

  Scenario: Cenario2 - Salvar com os campos obrigatórios e Valor preenchidos.
    Given que eu esteja na ORG e no objeto oportunidades
    When clicar no botão “Criar”
    And preencher o campo valor "10000"
    And preencher o campo Nome  "Teste Sysmap"
    And preencher o campo Data de fechamento"10/04/2022"
    And selecinar a fase prospecting
    And depois clicar no botão “Salvar e criar”
    Then A oportunidade deverá ser criada com sucesso.
