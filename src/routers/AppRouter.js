import React from 'react'
import AuthScreen from '../screens/auth/AuthScreen.jsx';
import CalendarScreen from '../components/calendar/CalendarScreen';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const AppRouter = () => {
  return <Router>
    <div>
      <Switch>
        <Route exact path="/auth" component={AuthScreen} />
        <Route exact path="/" component={CalendarScreen} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
}

export default AppRouter
