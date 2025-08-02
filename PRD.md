# PRD - ToDo List Simples com Vite

## 🧾 Nome do Projeto
ToDo List Simples - Vite + Local Storage

## 🎯 Objetivo
Implementar uma aplicação web simples que já existenten no diretório atual para se tornar um todo list. A aplicação deve permitir que o usuário:
- Adicione tarefas
- Marque tarefas como concluídas
- Delete tarefas
- Visualize tarefas salvas anteriormente (via Local Storage)

Sem uso de banco de dados ou backend.

## 🧑‍💻 Tecnologias
- **Frontend**: React
- **Bundler**: [Vite](https://vitejs.dev/)
- **Persistência**: `localStorage` do navegador

## ✅ Funcionalidades

### 1. Adicionar Tarefa
- Input de texto para digitar o nome da tarefa
- Botão "Adicionar"
- Tarefa é exibida na lista e salva em `localStorage`

### 2. Listar Tarefas
- Lista renderizada dinamicamente com as tarefas salvas no `localStorage`
- Tarefas exibidas em ordem de criação

### 3. Marcar como Concluída
- Cada item da lista pode ser marcado como "concluído"
- Estilo visual muda (ex: texto riscado ou cor diferente)
- Estado de conclusão é salvo no `localStorage`

### 4. Remover Tarefa
- Botão ou ícone de "remover" em cada tarefa
- Ao clicar, a tarefa é excluída da lista e do `localStorage`

## 💾 Armazenamento Local
Estrutura de dados salva no `localStorage`:
```json
[
  {
    "id": "uuid-ou-timestamp",
    "text": "Estudar Vite",
    "completed": false
  }
]
