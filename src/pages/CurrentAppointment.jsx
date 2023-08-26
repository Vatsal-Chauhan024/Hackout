import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: "Holiday",
    description: "this is description",
    allDay: true,
    start: new Date(2022, 9, 7),
    end: new Date(2022, 9, 7)
  },
  {
    id: 1,
    title: "Vacation Day",
    description: "Hack IT!!!",
    allDay: true,
    start: new Date(2022, 9, 10),
    end: new Date(2022, 9, 14)
  },
  
  {
    id: 3,
    title: "Vacation Day",
    description: "Hack IT!!!",
    allDay: true,
    start: new Date(2022, 10, 5),
    end: new Date(2022, 10, 14)
  }, 
];

const eventComponent = ({ event }) => {
  return (
    <div>
      {event.title} <br /> <small>{event.description}</small>{""}
    </div>
  );
};

const CurrentAppointment = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
    <div className="w-11/12 items-center justify-center" style={{ minHeight: 580 }}>
      <Calendar
        localizer={localizer}
        events={events}
        step={60}
        showMultiDayTimes
        defaultDate={new Date(2022, 9, 7)}
        style={{ minHeight: 580 }}
        components={{
          event: eventComponent
        }}
      />
    </div>
    </div>
  );
};

export default CurrentAppointment;
