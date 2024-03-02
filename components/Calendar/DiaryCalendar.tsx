import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './DiaryCalendar.module.css';
import CustomToolbar from './CustomToolbar';

const localizer = momentLocalizer(moment);

function DiaryCalendar({}) {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('일정을 입력하세요');
    if (title) {
      const newEvent = { start, end, title };
      setEvents(prevEvents => [...prevEvents, newEvent]);
    }
  };

  const handleNavigate = newDate => {
    setDate(newDate);
  };

  const formats = {
    dayFormat: (date, culture, localizer) =>
      localizer.format(date, 'D', culture),
    dateFormat: 'D',
    weekdayFormat: (date, culture, localizer) =>
      localizer.format(date, 'ddd', culture).toUpperCase(),
    monthHeaderFormat: (date, culture, localizer) =>
      localizer.format(date, 'YYYY MMMM', culture),
  };

  return (
    <div className={styles.Calendar}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        selectable
        onSelectSlot={handleSelectSlot}
        components={{
          toolbar: CustomToolbar,
        }}
        formats={formats}
        views={['month']}
        date={date}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default DiaryCalendar;
