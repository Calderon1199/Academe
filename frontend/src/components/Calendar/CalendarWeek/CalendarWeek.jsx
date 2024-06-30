import React from 'react';
import './CalendarWeek.css';

function CalendarWeek() {
  let date = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getWeekDays = (startDate) => {
    const days = [];
    const dayOfWeek = startDate.getDay();
    const startOfWeek = new Date(startDate);
    startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek);

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const currentWeek = getWeekDays(date);
  const currentDay = date.getDate();

  return (
    <div className="calendar-container2">
      <div className="calendar-content">
        <div className="calendar-header">
          <h2>{`${months[date.getMonth()]}, ${date.getFullYear()}`}</h2>
          <div className="calendar-controls1">
            <button>Month</button>
            <button>Week</button>
            <button>Day</button>
          </div>
          <div className="calendar-controls2">
            <button><i className="fa-solid fa-chevron-left"></i></button>
            <span>Today</span>
            <button><i className="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
        <div className="calendar-week">
          {currentWeek.map(day => (
            <div className={`calendar-week-day ${day.getDate() === currentDay ? 'current-day' : ''}`} key={day.toDateString()}>
              <div className="day-name">{day.toLocaleDateString('en-US', { weekday: 'long' })}</div>
              <div className="day-number">{day.getDate()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarWeek;
