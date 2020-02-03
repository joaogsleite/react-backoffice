import React, { FC, ComponentType } from 'react'
import { Redirect } from 'react-router-dom'
import auth from 'services/auth'

export default function (Component?: ComponentType<any>, render?: FC<any>, redirect?: string) {
  return function (props: any) {
    if (auth.isAuthenticated) {
      if (Component) {
        return (
          <Component {...props} />
        )
      } else if (render) {
        return (
          render(props)
        )
      } else {
        return null
      }
    } else {
      const to = {
        pathname: '/login',
        search: `?redirect=${redirect}`,
      }
      return (
        <Redirect to={to} />
      )
    }
  }
}