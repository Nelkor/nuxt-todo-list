import { Task } from '#/tasks'

import { createId } from './id-generator'

const now = Date.now()

export const store: Task[] = [
  'Взять монету',
  'Взять карту',
  'Разыграть существо',
  'Разыграть заклинание',
  'Разыграть карту поддержки',
  'Атаковать ударом',
  'Использовать способность существа',
].map(text => ({ id: createId(), text, time: now }))
