import { read } from '$/tasks'

export default defineEventHandler(event => {
  const { filter } = getQuery(event)

  return read(((Array.isArray(filter) ? filter[0] : filter) || '').toString())
})
