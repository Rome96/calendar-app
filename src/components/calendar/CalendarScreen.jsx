import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import Navbar from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-ES';

import 'moment/dist/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const events = [{
  title: 'Cumpleaños de mi madre',
  start: moment().toDate(), // new Date()
  end: moment().add(2, 'hours').toDate(),
  bgColor: 'FAFAFA',
}]

const CalendarScreen = () => {

  const eventPropGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: "#19456b",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "#FFFF",
    };

    return { 
      style
    }
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <h2>Calendar App</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventPropGetter}
      />
    </div>
  );
};

export default CalendarScreen;
