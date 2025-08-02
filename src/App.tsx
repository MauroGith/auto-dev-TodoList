import './App.css'
import type { Task } from './types'
import useLocalStorage from './useLocalStorage'
import { useState } from 'react'
import TaskItem from './TaskItem'

function App() {
  // Estado da lista de tarefas persistido no localStorage
  const [tasks, setTasks] = useLocalStorage<Task[]>('todos', [])
  
  // Estado para gerenciar o valor do input de nova tarefa
  const [newTaskText, setNewTaskText] = useState('')

  // Função para gerar IDs únicos
  const generateUniqueId = (): string => {
    const timestamp = Date.now()
    const random = Math.random().toString(36).substring(2, 8)
    return `${timestamp}-${random}`
  }

  // Função para adicionar uma nova tarefa
  const handleAddTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: generateUniqueId(),
        text: newTaskText.trim(),
        completed: false
      }
      
      setTasks([...tasks, newTask])
      setNewTaskText('') // Limpa o input após adicionar
    }
  }

  // Função para alternar a conclusão de uma tarefa
  const handleToggleComplete = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ))
  }

  // Função para remover uma tarefa
  const handleRemoveTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  // Função para lidar com a tecla Enter no input
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className="app-container">
      <header>
        <h1>ToDo List</h1>
      </header>
      <section className="task-input">
        <div className="input-group">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite uma nova tarefa..."
            className="task-input-field"
          />
          <button 
            onClick={handleAddTask}
            className="add-task-button"
            disabled={!newTaskText.trim()}
          >
            Adicionar
          </button>
        </div>
      </section>
      <section className="task-list">
        <ul>
          {tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggleComplete={handleToggleComplete}
              onRemoveTask={handleRemoveTask}
            />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App
