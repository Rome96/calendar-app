import { useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";

import Navbar from "../ui/Navbar";
import CalendarEvent from "./CalendarEvent";
import { messages } from "../../helpers/calendar-messages-ES";

import "moment/dist/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarModal from "./CalendarModal";
import { uiOpenModal } from "../../redux/action/ui";

moment.locale("es");
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const events = [
  {
    name: "Turiano",
    bgColor: "FAFAFA",
    notes: "Comprar pastel",
    title: "Cumpleaños de mi madre",
    start: moment().toDate(), // new Date()
    end: moment().add(2, "hours").toDate(),
    user: {
      _id: "123",
      name: "Turiano Rg",
    },
  },
];

const CalendarScreen = () => {
  const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "month");
  const { openModal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const eventPropGetter = (event, start, end, isSelected) => {
    const style = {
      // backgroundColor: "#00587a",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "#FFFF",
    };

    return {
      style,
    };
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectEvent = (e) => {
    console.log(e);
    dispatch(uiOpenModal());
  };

  const onDoubleClickEvent = (e) => {
    console.log(e);
    alert("Turiano el capo");
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <h2>Calendar App</h2>
      <Calendar
        events={events}
        view={lastView}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        localizer={localizer}
        eventPropGetter={eventPropGetter}
        components={{ event: CalendarEvent }}
        onView={onViewChange}
        onSelectEvent={onSelectEvent}
        onDoubleClickEvent={onDoubleClickEvent}
      />

      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;
