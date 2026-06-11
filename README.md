Vocês vão atuar como Desenvolvedores Front-end. A equipe de Back-end avisou que a API ainda não está pronta para conexão, mas já enviou o formato dos dados em JSON.
O trabalho de vocês é pegar esses dados estáticos no JavaScript, criar a lógica para desenhar os itens na tela do usuário e fazer os botões de filtro funcionarem. Sem HTML fixo para os itens, tudo deve ser gerado via código!

Diferencial: O tema é 100% livre! Vocês podem criar o sistema para uma Lanchonete, uma Pokédex, um inventário de jogos, um catálogo de carros, uma loja de roupas... a escolha é de vocês!
- PASSO A PASSO DO DESAFIO:
Fase 1: A Estrutura Visual (HTML)Crie um arquivo index.html.Adicione pelo menos 3 botões no topo para servir de filtro. Os nomes dependem do seu tema (Ex: "Todos", "Fogo", "Água" para Pokémon; ou "Todos", "Lanches", "Bebidas" para Lanchonete).Crie uma <div> vazia com um id (exemplo: id="vitrine" ou id="pokedex"). É aqui dentro que o seu JavaScript vai injetar os itens.

Fase 2: O Banco de Dados "Fake" (JavaScript)Crie o arquivo app.js e faça a ligação com o seu HTML.Declare um Array de Objetos. Ele será o nosso JSON simulado.Cadastre pelo menos 5 itens. Cada objeto deve ter no mínimo 4 propriedades importantes para o seu tema (Exemplo: id, nome, tipo/categoria, e poder/preco).
⚠️ Atenção: Ter uma propriedade de categoria ou tipo é OBRIGATÓRIO para o filtro funcionar depois.

Fase 3: A Renderização (Desenhando na tela)Crie uma função que use um laço de repetição (como o forEach) para varrer o seu array de objetos.Para cada item, o JS deve gerar o HTML correspondente e injetar dentro da sua div principal.
Dica: Usem a propriedade .innerHTML. Lembrem-se da diferença entre = e +=.
Fase 4: A Mágica dos Filtros (.filter)Configure os botões do HTML para chamar uma função de filtro quando clicados.Na lógica do JS, utilizem o método .filter() para gerar uma nova lista contendo apenas os itens da categoria/tipo escolhido, e mandem desenhar essa nova lista na tela.
- CRITÉRIOS DE AVALIAÇÃO (2,0 pts)
[0,5 pt] Banco de Dados Local: O array de objetos foi estruturado corretamente dentro do tema escolhido, com todas as propriedades exigidas.
[0,5 pt] Injeção de DOM: Os itens estão aparecendo na tela criados inteiramente via JavaScript (não vale escrever o item direto no HTML!).
[1,0 pt] Lógica de Filtros: Os botões funcionam e filtram a tela corretamente usando o método .filter() sem quebrar a página, e existe uma opção para voltar a mostrar "Todos".
- O QUE ENTREGAR
Façam o upload dos arquivos .html e .js (ou o arquivo .zip da pasta) diretamente aqui nesta atividade. Não esqueçam de clicar em "Entregar". Bom código!
