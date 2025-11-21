import React, { useState, useContext, useEffect, useRef } from 'react';
import GlobalContext from './Context/GlobalContext';
import { getMonth } from './util';

// components
import CalenderHeader from './components/CalenderHeader';
import Month from './components/Month';
import dayjs from 'dayjs';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  
  const todayRef = useRef(null);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
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
      if (monthIndex === dayjs().month()) {
          setTimeout(scrollToToday, 50); 
      }
  }, [monthIndex]);


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
