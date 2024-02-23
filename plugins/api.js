import { pickBy } from 'lodash-es'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  function request (method, url, params, headers) {
    return $fetch(url, {
      method,
      body: ['POST', 'PATCH', 'PUT'].includes(method) ? params : null,
      query: ['GET', 'DELETE'].includes(method) ? params : null,
      baseURL: config.public.API_URL,
      headers: pickBy({
        ...headers,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      onRequest (arg) {
        console.info('[fetch request]', arg.request)
      },
      onRequestError (arg) {
        console.info('[fetch request error]', arg.request, arg.error)
      },
      onResponse (arg) {
        console.info('[fetch response]', arg.request, arg.response.status)
      },
      onResponseError (arg) {
        console.info('[fetch response error]', arg.request, arg.response.status)
      }
    })
  }

  const api = {
    get (url, params = {}, headers = {}) {
      return request('GET', url, params, headers)
    },
    post (url, params = {}, headers = {}) {
      return request('POST', url, params, headers)
    },
    patch (url, params = {}, headers = {}) {
      return request('PATCH', url, params, headers)
    },
    put (url, params = {}, headers = {}) {
      return request('PUT', url, params, headers)
    },
    delete (url, params = {}, headers = {}) {
      return request('DELETE', url, params, headers)
    }
  }

  return {
    provide: {
      api
    }
  }
})
