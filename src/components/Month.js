import React, { forwardRef, useState } from "react";
import Day from "./Day";
import eventsData from "../events-data";

const Month = forwardRef(({ month }, ref) => {
  const [events] = useState(eventsData);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "grey",
        width: "auto",
        gap: "12px",
        margin: "1rem",
        borderRadius: "20px",
        padding: "1rem",
      }}
    >
     {month.map((row, i) => (
      <div className="calendar-row" key={i}>
        {row.map((day, idx) => (
          <Day
          key={idx}
          day={day}
          ref={ref}
          events={events}
          />
        ))}
        </div>
))}
    </div>
  );
});

export default Month;
