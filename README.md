# 🧠 auto-dev-Todo list

Este é um projeto de lista de tarefas criado 100% com Inteligência Artificial. A ideia, estrutura e execução foram conduzidas com auxílio de AIs especializadas:

- 📋 **Task-Master AI** gerou a lista de funcionalidades.
- 💻 **Cursor AI** interpretou e implementou o código.
- ⚛️ Baseado em **React** com **Vite** para um ambiente de desenvolvimento moderno e eficiente.

---

## 🧩 Etapas da Criação do Projeto com IA

1. O Task-Master AI gerou a lista de tarefas e funcionalidades da aplicação, usando como base o arquivo PRD.md

   **Exemplo de comando para o Task-Master AI:**
   ```bash
   # Comando para analisar o PRD e gerar funcionalidades
   task-master analyze PRD.md --output features.md --format markdown
   
   # Ou usando um prompt específico
   task-master generate-features --input PRD.md --template todo-list --output tasks.json
   
   # Comando para extrair requisitos técnicos
   task-master extract-requirements PRD.md --type technical --output requirements.txt
   ```
2. A lista foi alimentada no Cursor AI, que usou como base as instruções de dev_workflow.md e iniciou a criação do projeto com React + Vite.

   **Exemplo de prompts para o Cursor AI:**
   ```
   "Use @dev_workflow.md como referência obrigatória. Primeiro, identifique o TASK_ID no MCP Task Master 
   para a criação do projeto todo list. Siga o workflow: obtenha detalhes via Task Master, crie um plano 
   deepthink, atualize status para 'in-progress', implemente o projeto React + Vite, e marque como 'done'."
   
   "Siga estritamente @dev_workflow.md. Consulte o MCP Task Master para obter detalhes da tarefa de 
   implementação. Crie um plano deepthink antes de iniciar. Use React + TypeScript + Vite com localStorage. 
   Atualize o status da tarefa conforme o workflow."
   
   "Baseado em @dev_workflow.md, use o MCP Task Master para extrair detalhes da tarefa de desenvolvimento. 
   Implemente uma aplicação todo list seguindo o processo estruturado: análise → deepthink → implementação 
   → validação → notificação de conclusão."
   ```
3. O Cursor AI interpretou a estrutura, criou os arquivos e desenvolveu os componentes conforme as instruções.
4. O código foi revisado e testado localmente.
5. O projeto foi versionado com Git e publicado no GitHub.

## 🚀 Como executar o projeto localmente

Siga os passos abaixo para rodar o projeto em sua máquina:

### 1. Clone o repositório

```bash
git clone https://github.com/MauroGith/auto-dev-TodoList.git
```

### 2. Acesse o diretório do projeto
```bash
cd auto-dev-todo-list
```

### 3. Instale as dependências
Você precisa ter o Node.js instalado (versão LTS recomendada). Depois, execute:

```bash
  npm install
```
ou
```bash
  yarn
```

### 4. Inicie o servidor de desenvolvimento

```bash
  npm run dev
```
ou
```bash
  yarn dev
```
A aplicação ficará disponível em http://localhost:5173.

# 🛠️ Scripts disponíveis
- npm run dev — Inicia o servidor de desenvolvimento com Vite
- npm run build — Gera uma build otimizada para produção
- npm run preview — Serve a build localmente para teste

# 🤖 Sobre o desenvolvimento com IA
Este projeto é fruto de uma colaboração totalmente automatizada:
- A funcionalidade foi definida por Task-Master AI.
- O código foi interpretado e desenvolvido por Cursor AI com acompanhamento de contexto.