import React, { FC, ComponentType } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import auth from 'services/auth'

export default function (Component?: ComponentType<any>, render?: FC<any>) {
  return function (props: any) {

    const location = useLocation()

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
        search: `?redirect=${location.pathname}`,
      }
      return (
        <Redirect to={to} />
      )
    }
  }
}