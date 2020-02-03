declare module 'recost-logger' {
  type MiddlewareFunc = ((state: State, action: IAction, dispatcher?: Dispatcher) => void)
  export default {
    before: MiddlewareFunc,
    after: MiddlewareFunc,
  }
}