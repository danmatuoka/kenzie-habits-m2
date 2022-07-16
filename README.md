Projeto para conclusão do modulo 2 do curso Full Stack da Kenzie Academy Brasil.

Planejamento feito com metodologia agil, como ferramente usamos o trello.

Projeto em equipe:
Tech Leader - Daniel Matuoka
Scrum Master - Dara Gomes
Dev - Amanda Rodrigues
Dev - Arthur Ribeiro
Dev - Willian Oliveira

## Principais conceitos

- OOP

  1.  Sintaxe de classe
  2.  Classes estáticas

- Spread Operator
- Desconstrução
- Consumo de API;
- LocalStorage.
- Manipulação dos elementos com o DOM

## Requisitos técnicos/funcionalidades

- **Mobile first:**

  1.  Tela de login deve ser feita em mobile first
  2.  Tela homepage deve ser feita em mobile first

- **Tela de Login:**

  1.  Deve ter aparência semelhante ao figma
  2.  Botão "Entrar" deve percorrer o formulário e realizar a requisição de login
  3.  Caso a requisição esteja correta deve adicionar o token e dados do usuário no localstorage
  4.  Redirecionar para a homepage caso o email e senha estejam corretos
  5.  Retorno visual caso o usuário passar dados inválidos no input

- **Tela Homepage:**

  1.  Deve ter aparência semelhante ao figma
  2.  Realizar a requisição de pegar os hábitos
  3.  Deve renderizar o nome e imagem do usuário (será necessário realizar uma requisição para pegar os dados do usuário)
  4.  Ao clicar na foto do usuário deve abrir um dropDownMenu com os as funcionalidades de editar perfil e sair/logout
  5.  No dropDownMenu na opção de editar perfil deve abrir menu de edição do usuário
  6.  No dropDownMenu na opção de sair/logout deve apagar os dados do localstorage e redirecionar o usuário para a página de login
  7.  Adicionar a lista de habitos a página
  8.  Botão de "Concluídos" deve exibir apenas os hábitos concluídos
  9.  Botão "Todos" deve exibir todos os hábitos do usuário
  10. Botão "Criar" deve abrir modal para criar novos hábitos
  11. "..." deve abrir modal de atualização de hábitos
  12. Dentro do modal de atualização de hábitos também deve ter a opção de excluir que realiza a requisição de deletar hábito
  13. Checkbox deve realizar uma requisição de atualizar o hábito o tornando concluído ou não concluído

- **Modais:**

1.  Devem ter a aparência semelhante ao figma
2.  Os modais devem ser construídos com formulários
3.  Deve capturar as informações do formulário
4.  Realizar as requisições de acordo com o tipo de formulário, criar, atualizar ou deletar
5.  Retorno visual caso o usuário passar dados inválidos no input

## Extras:

- Animação nos botões
- Animação durante as transições de tela
- Animação durante o popup dos modais
- Padronização nos nomes das branches
- Os commits seguem um padrão
- Estilização da checkbox
- Popup de erro para as requisições
