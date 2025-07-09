export const HttpStatusCode = {
   ok: 200,
   noContent: 204,
   badRequest: 400,
   unauthorized: 401,
   forbidden: 403,
   notFound: 404,
   serverError: 500,
} as const

export type HttpRequest = {
   url: string
   method: HttpMethod
   body?: any
   headers?: any
   params?: any
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export type HttpStatusCode = typeof HttpStatusCode[keyof typeof HttpStatusCode]

export type HttpResponse<T = any> = {
   statusCode: HttpStatusCode
   body?: T
}

export interface HttpClient<R = any> {
   request: (data: HttpRequest) => Promise<HttpResponse<R>>
}
