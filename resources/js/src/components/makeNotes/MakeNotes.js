import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { INITIAL_EVENTS, createEventId } from './event'

export default function MakeNotes() {

    const [weekendsVisible, setweek] = useState(true);
    const [currentEvents, setCurrentEvents] = useState([])
    function handleEvents(events){
        setCurrentEvents(events);
        
    }
    return (
        <div className="time-table" style={{ 'width': '80%', 'margin': '0 auto' }}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={true}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                eventContent={renderEventContent} // custom render function
                eventsSet={handleEvents}
            />
        </div>
    )
}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText} &nbsp;</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

