import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../components/Template'
import Dashboard from '../components/Dashboard'
import Student from '../components/Student'

const createRoutes = () => {
  return (
    <Route
      path='/dashboard'
      component={Template}      
    >
      <IndexRoute
        component={Dashboard}        
      />
      <Route
        path='/students'
        component={Student}        
      />
    </Route>
  )
}

const Routes = createRoutes()

export default Routes