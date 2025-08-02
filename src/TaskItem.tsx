import type { Task } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface TaskItemProps {
  task: Task
  onToggleComplete: (taskId: string) => void
  onRemoveTask: (taskId: string) => void
}

function TaskItem({ task, onToggleComplete, onRemoveTask }: TaskItemProps) {
  const handleToggleComplete = () => {
    onToggleComplete(task.id)
  }

  const handleRemoveTask = () => {
    onRemoveTask(task.id)
  }

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
        className="task-checkbox"
      />
      <span className={`task-text ${task.completed ? 'completed' : ''}`}>
        {task.text}
      </span>
      {task.completed && <span className="task-completed">(Concluída)</span>}
      <button 
        onClick={handleRemoveTask}
        className="remove-task-button"
        title="Remover tarefa"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  )
}

export default TaskItem 