import auth from './auth'

test('auth service starts unauthenticated', () => {
  expect(auth.isAuthenticated).toBe(false)
});