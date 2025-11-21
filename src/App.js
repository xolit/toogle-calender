import React, { useState, useContext, useEffect, useRef } from 'react';
import GlobalContext from './Context/GlobalContext';
import { getMonth } from './util';

// components
import CalenderHeader from './components/CalenderHeader';
import Month from './components/Month';
import dayjs from 'dayjs';

function App() {
  const { monthIndex, yearIndex } = useContext(GlobalContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth(monthIndex, yearIndex));
  
  const todayRef = useRef(null);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex, yearIndex));
  }, [monthIndex]);

  const scrollToToday = () => {
      if (todayRef.current) {
          todayRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
          });
      }
  };


  useEffect(() => {
    if (monthIndex === dayjs().month() && yearIndex === dayjs().year()) {
      setTimeout(scrollToToday, 50);
    }
  }, [monthIndex, yearIndex]);


  return (
  <div
    style={{
      height: '100vh',
      overflowY: 'auto',
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      '&::WebkitScrollbar': {
      display: 'none'
    }
  }}>
    <CalenderHeader onTodayClick={scrollToToday} />
    <Month month={currentMonth} ref={todayRef} />
  </div>

  );
}

export default App;
