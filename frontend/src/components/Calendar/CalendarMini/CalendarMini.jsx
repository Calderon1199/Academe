import React from 'react';
import './CalendarMini.css';

function CalendarMini(props) {
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
        <div className="calendar-mini-container">
            <div className="calendar-mini-header">
                <h2>{new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}</h2>
            </div>
            <div className="calendar-mini-grid">
                <div className="calendar-mini-day-names">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div className="mini-day-name" key={day}>{day}</div>
                    ))}
                </div>
                <div className="calendar-mini-days">
                    {Array.from({ length: firstDayIndex }).map((_, index) => (
                        <div key={index} className="mini-empty-day"></div>
                    ))}
                    {days.map(day => (
                        <div key={day} className="calendar-mini-day">{day}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CalendarMini;
