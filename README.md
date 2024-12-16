# 📸 Insta API

Este é um projeto de API simples, desenvolvido com Node.js e Express, que
permite gerenciar postagens de imagens com descrições geradas automaticamente
por IA. Ele foi criado como um exercício de aprendizado e inclui integração com
MongoDB para armazenar dados e com o serviço Gemini para gerar descrições de
imagens.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Plataforma para construção de APIs.
- **Express**: Framework para gerenciamento de rotas e middleware.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Multer**: Gerenciamento de uploads de imagens.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Cors**: Configuração de segurança para requisições entre domínios.
- **@google/generative-ai (Gemini)**: API para geração de descrições de imagens.

---

## 📝 Funcionalidades

- **Listar Postagens**: Retorna todas as postagens armazenadas no banco de
  dados.
- **Criar Postagem**: Adiciona uma nova postagem ao banco de dados.
- **Fazer Upload de Imagem**: Permite fazer upload de uma imagem e associá-la a
  uma postagem.
- **Atualizar Postagem**: Atualiza uma postagem existente com uma imagem e uma
  descrição gerada pela IA.
