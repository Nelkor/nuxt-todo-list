import { Task } from '#/tasks'

export default defineEventHandler(event => {
  const { filter } = getQuery(event)

  console.log(filter)

  return [
    {
      id: 1,
      text: 'Первый',
    },
    {
      id: 2,
      text: 'Второй',
    },
  ] as Task[]
})
