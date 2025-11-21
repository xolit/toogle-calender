import { forwardRef } from 'react';
import dayjs from 'dayjs';

const Day = forwardRef(({ day, events }, ref) => {
  const isToday = day.format('DD-MM-YY') === dayjs().format('DD-MM-YY');
  const dateKey = day.format('YYYY-MM-DD');
  const todayEvents = events[dateKey] || [];

  // Define the event handler directly
  const HandleAddEvent = () => {
    alert('In Progress: Add Event Functionality for ' + day.format('YYYY-MM-DD'));
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          padding: '1rem .5rem',
          columnGap: '50px',
        }}
      >
        {/* DATE CIRCLE */}
        <div
          ref={isToday ? ref : null}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isToday ? '#c4b211ff' : 'white',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
        >
          <div style={{ fontWeight: 550 }}>{day.format('ddd').toUpperCase()}</div>
          <div>{day.format('DD')}</div>
        </div>

        {/* EVENTS LIST */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
          }}
        >
          {todayEvents.length > 0 &&
            todayEvents.map((e, i) => (
              <div
                key={i}
                style={{
                  background: '#222',
                  padding: '6px 10px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  color: 'beige',
                  width: 'fit-content',
                  minWidth: '120px',
                  textAlign: 'center',
                }}
              >
                {e.title}
              </div>
            ))}
        </div>

        {/* ADD EVENT BUTTON */}
        <button
          style={{ marginRight: '1rem', whiteSpace: 'nowrap' }}
          onClick={HandleAddEvent} // Pass the function itself, don't call it immediately
        >
          Add Event
        </button>
      </div>
      <hr style={{ width: '99%' }} />
    </>
  );
});

export default Day;
