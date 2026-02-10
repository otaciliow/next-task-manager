# Next Task Manager

Um **gerenciador de tarefas simples** construído com **Next.js 13+ (App Router)**, **TypeScript** e **React Context API**.  
Permite adicionar tarefas, marcar como concluídas com risco no título, editar, excluir e salvar tudo no **sessionStorage** do navegador para persistência entre recarregamentos da página.

---

## 📌 Recursos

✔️ Adicionar novas tarefas  
✔️ Marcar tarefas como **concluídas** (riscando o título)  
✔️ Deletar tarefas  
✔️ Persistência no browser através de **sessionStorage**

---

## 🚀 Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado no seu sistema:

- **Node.js** (>= 18)
- Um gerenciador de pacotes: **npm / yarn / pnpm**

Você pode verificar se o Node está instalado com:

```bash
node -v
```

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/otaciliow/next-task-manager.git
```

2. Entre no diretório do projeto:

```bash
cd next-task-manager
```

3. Instale as dependências:

```bash
npm install
# ou
yarn
# ou
pnpm install
```

---

## 🧪 Rodando o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra o navegador e acesse:

```
http://localhost:3000
```

A página recarrega automaticamente conforme você edita o código. ([GitHub][1])

---

## 🧠 Como usar

### 📝 Adicionar tarefa

Digite o título da tarefa no input e clique em **Adicionar**.
A tarefa aparecerá listada logo abaixo.

---

### ✔️ Marcar como concluída

Clique no botão `✓` ao lado da tarefa.
O título será exibido com um **riscado** para indicar conclusão.

---

### 🗑️ Excluir tarefa

Clique no botão de lixeira ao lado da tarefa para remover da lista permanentemente.

---

## 🧩 Estrutura do projeto

Aqui estão os arquivos e pastas principais:

```
.
├── app/                # App Router / layout da aplicação
├── components/         # UI: Formulário e Lista de tarefas
├── hooks/              # Hook para acessar o contexto de tarefas
├── providers/          # Contexto global de tarefas
├── types/              # Tipos TypeScript
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

---

## 💾 Persistência com `sessionStorage`

As tarefas são armazenadas no `sessionStorage`, ou seja:

✔️ Persistem enquanto a aba estiver aberta
❌ São perdidas quando a aba é fechada

Essa escolha simplifica o controle sem backend.

---

## 📌 Tecnologias utilizadas

* **Next.js (App Router)** — framework React moderno
* **TypeScript** — tipagem segura
* **React Context API** — estado global de tarefas
* **sessionStorage** — persistência no navegador

---

## 📄 Licença

Esse projeto está aberto para contribuição!
Sinta-se livre para abrir issues e pull requests.

---
