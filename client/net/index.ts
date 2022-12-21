export const post = async <T>(path: string, body: unknown): Promise<T> => {
  const result = await fetch(`/api/${path}`, {
    method: 'POST',
    body: JSON.stringify(body),
  })

  return result.json()
}
