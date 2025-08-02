/**
 * Interface que representa uma tarefa do ToDo list.
 *
 * - id: Identificador único da tarefa (string).
 * - text: Descrição da tarefa (string).
 * - completed: Indica se a tarefa foi concluída (boolean).
 */
export interface Task {
  /** Identificador único da tarefa */
  id: string;
  /** Descrição da tarefa */
  text: string;
  /** Indica se a tarefa foi concluída */
  completed: boolean;
}