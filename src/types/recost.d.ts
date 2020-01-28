declare module 'recost' {
  export function useSelector(func: function): any
  export function dispatch(query: any): void
}