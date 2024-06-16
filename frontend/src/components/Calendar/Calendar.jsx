import React from 'react';
import './Calendar.css';
import HomeNav from '../HomeNav';

function Calendar() {
  const getDaysInCurrentMonth = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  };

  const daysInCurrentMonth = getDaysInCurrentMonth();
  const firstDayIndex = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();

  const days = [...Array(daysInCurrentMonth).keys()].map(i => i + 1);

  return (
    <div className="calendar-container">
      <HomeNav />
      <div className="calendar-content">
        <div className="calendar-header">
          <h2>January 2022</h2>
          <div className="calendar-controls">
            <button>Today</button>
            <button>Add Event</button>
          </div>
        </div>
        <div className="calendar-grid">
          <div className="calendar-day-names">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div className="day-name" key={day}>{day}</div>
            ))}
          </div>
          <div className="calendar-days">
            {Array.from({ length: firstDayIndex }).map((_, index) => (
              <div key={index} className="empty-day"></div>
            ))}
            {days.map(day => (
              <div key={day} className="calendar-day">{day}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
