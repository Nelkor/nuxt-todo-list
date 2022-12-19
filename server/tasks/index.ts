import { store } from './store'
import { createId } from './id-generator'

export const create = (text: string) => {
  store.push({ id: createId(), text })
}

export const read = (filter = '') => {
  const LcFilter = filter.toLowerCase()

  return store.filter(item => item.text.toLowerCase().includes(LcFilter))
}

export const update = (id: number, text: string) => {
  const task = store.find(item => item.id === id)

  if (task) {
    task.text = text
  }
}

export const del = (id: number) => {
  const index = store.findIndex(item => item.id === id)

  if (index !== -1) {
    store.splice(index, 1)
  }
}
