import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import useAuth from "../helper/useAuth";
import { Link } from "react-router-dom";
import api from "../api/api"
import { toast } from "react-toastify";



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
    <div className="">
      {event.title} <br /> <small>{event.description}</small>{""}
    </div>
  );
};

const CurrentAppointment = () => {
  useEffect(()=>{
    api.post("").then((response)=>{
      toast.info(response.data.message)
    })
    .catch((error)=>{
      toast.error(error.response.data.message)
    })
  })
  useAuth();
  return (
    <>
    <div className="alert w-full flex justify-between bg-white border-none mb-4 px-16 font-medium text-secondary">
  <span className="text-3xl">Booked Appointment</span>
  <div>
    <Link to = "/home"><button className="btn btn-sm btn-primary">Accept</button></Link>
  </div>
</div>
    <div className=" w-screen flex items-center justify-center">
    <div className="w-11/12 items-center justify-center" style={{ minHeight: 580 }}>
      <Calendar
        localizer={localizer}
        events={events}
        step={60}
        showMultiDayTimes
        defaultDate={new Date(2022, 9, 7)}
        style={{ minHeight: 580, backgroundColor: "" }}
        components={{
          event: eventComponent
        }}
      />
    </div>
    </div>
    </>
  );
};

export default CurrentAppointment;
