import { del } from '$/tasks'

export default defineEventHandler(async event => {
  const body = await readBody<{ id: number }>(event)

  del(body && body.id)

  return {}
})
