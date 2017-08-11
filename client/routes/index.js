import React from 'react'
import {Route, IndexRoute} from 'react-router'

const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
      auth={auth}
      queries={ViewerQueries}
    >
      <IndexRoute
        component={Home}
        queries={ViewerQueries}
      />
      <Route
        path='/profile'
        component={Profile}
        queries={ViewerQueries}
        onEnter={userOnly}
      />
    </Route>
  )
}

const Routes = createRoutes()

export default Routes