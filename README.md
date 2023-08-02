
#GrowTwitter - Rede Social estilo Twitter com POO em TypeScript

GrowTwitter é uma aplicação de rede social estilo Twitter desenvolvida em TypeScript, utilizando os conceitos de Programação Orientada a Objetos (POO). A aplicação possui classes para as entidades necessárias e estabelece relacionamentos do tipo composição. Os dados são armazenados em um banco de dados em memória (array).

Requisitos:

Node.js com TypeScript instalado.
Funcionalidades
GrowTwitter possui as seguintes funcionalidades:

Cadastro de usuários
Cadastro de tweets por usuários
Mecanismo de seguidores entre usuários
Likes e replies em tweets
Entidades e Atributos
A aplicação possui as seguintes entidades com seus respectivos atributos:

#Usuário

Identificador (id)
Nome (name)
E-mail (email)
Username (username)
Senha (password)
Tweet
Identificador (id)
Conteúdo (content)
Tipo (type) [base ou reply]

#Regras e Funcionalidades Usuário

Cada usuário possui um id e username únicos.
Os usuários podem criar tweets.
Os usuários podem seguir outros usuários.
Os usuários podem curtir e responder (reply) tweets de outros usuários.
Os usuários podem visualizar os tweets dos usuários que estão seguindo (estilo feed de tweets).

#Tweet

Cada tweet possui um id único.
Os tweets podem ser do tipo "base" ou "reply".
Cada tweet pertence a apenas um usuário.
Os tweets podem conter likes e replies.
Os tweets podem ser exibidos de acordo com as regras estabelecidas.

#Follower

Um usuário pode seguir outro usuário.
O usuário que segue outro é chamado de "Follower".
Um usuário pode visualizar os tweets de quem está seguindo.

#Like e Reply

Um usuário pode responder a um tweet específico com outro tweet (reply).
Um tweet reply conterá a propriedade tipo setada como "Reply".
Um usuário pode curtir um tweet específico.
Um tweet pode ter zero ou vários likes e replies.