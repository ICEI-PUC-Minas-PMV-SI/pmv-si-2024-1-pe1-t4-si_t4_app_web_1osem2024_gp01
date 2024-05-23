# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Nessa perspectiva, apresentamos algumas personas para auxiliar na visualização do benefício que nosso site pode ter no cotidiano das pessoas:

**Nome:** Sophia Oliveira  
**Usuário Individual - Iniciante em Segurança Cibernética**  
**Idade:** 30 anos  
Sophia é uma professora do ensino médio que usa a internet diariamente para preparar aulas, fazer compras online e interagir nas redes sociais. Ela está ciente de que existem riscos de segurança na internet, mas não tem muito conhecimento sobre como se proteger contra eles. Ela está interessada em aprender mais sobre segurança da informação para proteger suas informações pessoais e profissionais.

**Nome:** Breno Silva  
**Profissional de TI - Interessado em Notícias e Atualizações**  
**Idade:** 35 anos  
Breno trabalha como analista de segurança da informação em uma empresa de médio porte. Ele tem um bom entendimento dos conceitos básicos de segurança cibernética, mas está sempre procurando por notícias atualizações sobre as últimas ameaças e tendências. Ele está interessado em fontes confiáveis de informação que possam ajudá-lo a manter-se atualizado no campo em constante evolução da segurança da informação.

**Nome:** Tiago Santos  
**Estudante de Segurança da Informação - Procurando Recursos de Aprendizado**  
**Idade:** 22 anos  
Tiago está atualmente estudando segurança da informação na universidade e está interessado em se tornar um profissional neste campo. Ele está constantemente procurando recursos educacionais adicionais para complementar seus estudos e aprofundar seu conhecimento sobre segurança cibernética. Ele está interessado em encontrar um site confiável que forneça informações atualizadas e relevantes sobre segurança da informação

**Nome:** Pedro Almeida  
**Profissional de TI - Procurando Testar Conhecimentos**  
**Idade:** 32 anos  
Pedro trabalha como administrador de sistemas em uma grande empresa de tecnologia. Ele está sempre buscando maneiras de aprimorar suas habilidades e conhecimentos em segurança cibernética. Pedro procura por quizzes interativos que possam testar seus conhecimentos e desafiar suas habilidades na identificação de ameaças cibernéticas e melhores práticas de segurança.

**Nome:** Mariana Oliveira  
**Usuária comum da Internet - Atenta a Sites Fraudulentos**  
**Idade:** 45 anos
Mariana é uma usuária comum da internet que realiza compras online e acessa vários sites regularmente. Ela está preocupada com a segurança de suas informações pessoais, especialmente ao lidar com sites desconhecidos ou suspeitos. Mariana procura uma maneira de relatar sites fraudulentos que encontre durante sua navegação online, ajudando assim a proteger outros usuários contra possíveis golpes e fraudes.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Usuário individual | Saber como proteger minhas informações enquanto navego na internet| Proteger meus dados contra possíveis ameaças online|
| Profissional de TI | Ler as últimas notícias sobre cibersegurança | Para me manter atualizado sobre os tipos de ataques da área de cibersegurança e como me proteger |
| Estudante de Segurança da Informação | Quero ter acesso a uma biblioteca abrangente de artigos, notícias e vídeos informativos e educacionais | Para expandir meus conhecimentos e aprimorar minhas habilidades profissionais na área de Cibersegurança |
| Usuário individual | Avaliar a segurança das minhas senhas | Para que eu possa identificar e corrigir senhas fracas que possam ser facilmente comprometidas por hackers |
| Usuário comum da internet que realiza compras online e acessa várias sites regularmente | Quero ter a opção de relatar sites suspeitos ou fraudulentos que encontre durante minha navegação online | Para que eu possa ajudar a proteger outros usuários contra possíveis golpes e fraudes |
| Administrador de sistemas em uma empresa de tecnologia | Quero ter acesso a um quizz interativo | Para testar meus conhecimentos e desafiar minhas habilidades na identificação de ameaças cibernéticas |
| Usuário comum da internet que realiza compras online e acessa várias sites regularmente | Quero ter acesso a uma lista que conste o histórico de sites fraudulentos relatados | Para me proteger de sites falsos e maliciosos |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve ser capaz de exibir as últimas notícias sobre segurança cibernética | ALTA | 
|RF-002| Os usuários devem ser capazes de clicar em uma notícia para ler mais detalhes | ALTA |
|RF-003| O site deve fornecer conteúdo educacional sobre segurança cibernética de maneira fácil de entender | ALTA |
|RF-004| Deve haver seções diferentes para diferentes tópicos de segurança cibernética | MÉDIA |
|RF-005| Os usuários devem ser capazes de navegar facilmente entre diferentes seções | MÉDIA |
|RF-006| O site deve incluir uma ferramenta para gerar senhas fortes | ALTA |
|RF-007| Os usuários devem ser capazes de especificar o comprimento e os tipos de caracteres na senha | MÉDIA |
|RF-008| A senha gerada deve ser exibida para o usuário de uma maneira segura | MÉDIA |
|RF-009| O site deve armazenar as senhas do usuário criptografadas | MÉDIA |
|RF-010| O sistema deve permitir que o administrador crie novas perguntas para o quiz | ALTA |
|RF-011| O sistema deve calcular a pontuação dos usuários com base em suas respostas | ALTA |
|RF-012| O sistema deve fornecer feedback aos usuários após a conclusão do quiz, incluindo a pontuação total e as respostas corretas | ALTA |
|RF-013| O sistema deve autenticar os usuários antes de permitir o acesso ao quiz | ALTA |
|RF-014| O sistema deve validar as entradas para garantir que todas as perguntas atualizadas tenham pelo menos uma resposta correta | MÉDIA |
|RF-015| O sistema deve validar as entradas do usuário para garantir que o URL fornecido é válido e que todos os campos necessários foram preenchidos | ALTA |
|RF-016| O sistema deve permitir ao usuário adicionar comentários sobre o possível site fraudulento | ALTA |
|RF-017| O sistema deve permitir que o usuário edite seu comentário posteriormente | MÉDIA |
|RF-018| Após a submissão de um relatório, o sistema deve fornecer uma confirmação ao usuário de que o relatório foi recebido | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser fácil de usar e navegar. O design deve ser limpo e minimalista, com uma interface intuitiva | ALTA | 
|RNF-002| O site deve carregar rapidamente e responder prontamente às ações do usuário. As atualizações de notícias devem ocorrer sem atrasos perceptíveis | BAIXA | 
|RNF-003| Como um site sobre segurança da informação, deve seguir as melhores práticas de segurança. Isso inclui o uso de HTTPS, a proteção contra ataques comuns na web e a garantia de que a ferramenta do gerador de senhas opera no lado do cliente e não envie senhas geradas pela rede | MÉDIA | 
|RNF-004| O site deve ser acessível para usuários com deficiências. Isso pode incluir o fornecimento de texto alternativo para imagens, garantindo um contraste de cor suficiente para usuários com deficiência visual e tornando o site navegável por teclado | BAIXA | 
|RNF-005| O site deve ser compatível com todos os principais navegadores e dispositivos, incluindo desktops, tablets e smartphones | ALTA | 
|RNF-006| O código do site deve ser bem organizado e fácil de entender, para que possa ser facilmente mantido e atualizado por outros desenvolvedores no futuro | ALTA | 
|RNF-007| O site deve ser projetado de forma a facilitar o teste, permitindo que cada componente seja testado de forma independente para garantir sua funcionalidade correta | MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |