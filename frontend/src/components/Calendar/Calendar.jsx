import React from 'react';
import './Calendar.css';
import HomeNav from '../HomeNav';

function Calendar() {
    let date = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const getDaysInCurrentMonth = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  };

  const daysInCurrentMonth = getDaysInCurrentMonth();
  const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const days = [...Array(daysInCurrentMonth).keys()].map(i => i + 1);

  const currentDay = date.getDate();



  return (
    <div className="calendar-container">
      <HomeNav />
      <div className="calendar-content">
        <div className="calendar-header">
          <h2>{`${months[date.getMonth()]} ${date.getFullYear()}`}</h2>
          <div className="calendar-controls1">
            <button>Month</button>
            <button>Week</button>
            <button>Day</button>
          </div>
          <div className="calendar-controls">
            <button><i class="fa-solid fa-chevron-left"></i></button>
            <span>Today</span>
            <button><i class="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
        <div className="calendar-grid">
          <div className="calendar-day-names">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div className="day-name" key={day}>{day}</div>
            ))}
          </div>
          <div className="calendar-days">
            {Array(firstDayIndex).fill(null).map((_, index) => (
              <div key={`empty-${index}`} className="calendar-day empty"></div>
            ))}
            {days.map(day => (
              <div
                key={day}
                className={`calendar-day ${day === currentDay ? 'current-day' : ''}`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
