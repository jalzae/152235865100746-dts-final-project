import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"

import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";


import axios from '../../../plugins/axios/axios'
import { useEffect, useState } from "react";

const Calendar = () => {
  const [events, setEvents] = useState([])
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }

  const loadevents = async () => {
    let response = await axios.post('/home/get_calendar', {}, {});
    setEvents(response.data.data)
  }

  useEffect(() => {
    loadevents()
  }, [])


  return (<div className="col-lg-12">
    <FullCalendar
      defaultView="dayGridMonth"
      header={{
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      }}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      events={events}
      eventClick={(info) => { console.log(info.event); }}
    />
  </div>)


}
export default Calendar