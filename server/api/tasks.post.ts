import { create } from '$/tasks'

export default defineEventHandler(async event => {
  const body = await readBody<{ text: string }>(event)

  return body && body.text ? create(body.text) : { id: 0, time: 0 }
})
