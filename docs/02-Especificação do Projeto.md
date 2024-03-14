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
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
