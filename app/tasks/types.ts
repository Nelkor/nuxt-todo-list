export interface Task {
  id: number
  text: string
  time: number
}

export type CreateTaskResult = Omit<Task, 'text'>
