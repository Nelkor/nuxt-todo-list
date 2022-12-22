import { CreateTaskResult } from '#/tasks'
import { post, del } from '@/net'

export const createTask = async (text: string) => {
  const { id, time } = await post<CreateTaskResult>('tasks', { text })

  return { id, time }
}

export const deleteTask = (id: number) => {
  del('tasks', { id }).then()
}
