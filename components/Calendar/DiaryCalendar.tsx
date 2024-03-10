import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './DiaryCalendar.module.css';
import CustomToolbar from './CustomToolbar';
import Modal from '../Modal/Modal';
import { createDiary } from '../api/api';

const localizer = momentLocalizer(moment);

function DiaryCalendar() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setShowModal(true);
  };

  const handleNavigate = newDate => {
    setDate(newDate);
  };

  const handleSaveDiary = async content => {
    const diaryDate = moment(selectedDate).format('YYYYMMDD');
    try {
      await createDiary(content, diaryDate); // API 호출
      const newEvent = {
        start: selectedDate,
        end: selectedDate,
        title: content,
        color: getRandomColor(), // 이벤트에 랜덤 색상 적용
      };
      setEvents(prevEvents => [...prevEvents, newEvent]);
    } catch (error) {
      console.error('다이어리 저장 중 에러 발생:', error);
    } finally {
      setShowModal(false); // 모달 닫기
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
        views={['month']}
        date={date}
        onNavigate={handleNavigate}
      />
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveDiary}
      />
    </div>
  );
}

export default DiaryCalendar;
