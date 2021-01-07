import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Navbar from '../ui/Navbar';

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const events = [{
  title: 'Cumpleaños de mi madre',
  start: moment().toDate(), // new Date()
  end: moment().add(2, 'hours').toDate(),
  bgColor: 'FAFAFA',
}]

const CalendarScreen = () => {
  return (
    <div className="calendar-screen">
      <Navbar />
      <h2>Calendar App</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default CalendarScreen;
