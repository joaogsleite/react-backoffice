export const API_ADDRESS = process.env.NODE_ENV === 'production' 
  ? '/api'
  : '/api'

export const API_MOCK_ENABLED: boolean = true //process.env.NODE_ENV === 'test'