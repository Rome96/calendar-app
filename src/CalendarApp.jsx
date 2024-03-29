import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import AppRouter from './routers/AppRouter';

const CalendarApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default CalendarApp
