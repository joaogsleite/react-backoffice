import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from 'services'

function renderContent(Component, render) {
  return function (props) {
    return auth.isAuthenticated ? (
      (
        Component && (
          <Component {...props} />
        )
      ) || (
        render && render(props)
      ) || null
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          search: `?redirect=${props.location.pathname}`,
        }}
      />
    )
  }
}

export default function ({ component: Component, render: privateRender, ...rest }) {
  return (
    <Route
      {...rest}
      render={renderContent(Component, privateRender)}
    />
  )
}
