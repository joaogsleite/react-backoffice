import { MOCK_ENABLED } from "constants/mock"
import { API_ADDRESS } from "constants/api"

type MockedFetch = ((url: RequestInfo, options?: RequestInit) => Promise<any>)

export interface IMockEndpoints {
  [key: string]: {
    [key: string]: MockedFetch,
  },
}

const endpoints: IMockEndpoints = {}

export default function mock(method: string, url: string, func: MockedFetch) {
  if (!endpoints[url]) {
    endpoints[url] = {}
  }
  endpoints[url][method] = func
}

export function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

export const originalFetch = window.fetch

if (MOCK_ENABLED) {
  window.fetch = (url: RequestInfo, options: RequestInit = {}) => {
    if (typeof url === 'string') {
      const method = options.method || 'GET';
      const path = url.replace(API_ADDRESS, '')
      if (endpoints[path] && endpoints[path][method]) {
        return endpoints[path][method](url, options).then((response) => {
          return new Response(JSON.stringify(response))
        })
      }
    }
    return originalFetch(url, options)
  }
}