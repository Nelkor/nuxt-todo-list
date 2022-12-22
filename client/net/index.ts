type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

const createPostLike =
  (method: HttpMethod) =>
  async <T>(path: string, body: unknown): Promise<T> => {
    const result = await fetch(`/api/${path}`, {
      method,
      body: JSON.stringify(body),
    })

    return result.json()
  }

export const post = createPostLike('POST')

export const del = createPostLike('DELETE')
