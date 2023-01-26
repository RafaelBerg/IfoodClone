<h4 align="center"> 
	Ifood Clone
</h4>

## 💻 About
Esse é um projeto FullStack no qual eu clono o ifood, criando tanto uma aplicação web e mobile quanto um servidor. A versão Web tem a finalidade de cadastrar a loja, colocar os pratos no cardápio e aceitar os pedidos que serão feitos pela aplicação mobile

---

## 🚀 How it works

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

#### 🎲 Rodando o Backend (servidor)

```bash
# Instale as dependências
$ npm install

# Atualizar banco de dados
$ npx prisma migrate dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 
```

#### 🧭 Rodando a aplicação web (Frontend)

```bash
# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:5173 - acesse http://localhost:5173
```

---
