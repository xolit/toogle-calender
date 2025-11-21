import { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../Context/GlobalContext";

const Calendar = ({ onTodayClick }) => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const currentMonth = dayjs().month(monthIndex);

  const nextMonth = () => {
    if (monthIndex >= 11) return;
    setMonthIndex(monthIndex + 1);
  };

  const prevMonth = () => {
    if (monthIndex <= 0) return;
    setMonthIndex(monthIndex - 1);
  };

  const goToToday = () => {
    const todayMonth = dayjs().month();
    setMonthIndex(todayMonth);
    if (onTodayClick) onTodayClick();
  };


  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h2>
        {currentMonth.format("MMMM")} {currentMonth.format("YYYY")}
      </h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
        <button
          onClick={prevMonth}
          disabled={monthIndex <= 0}
          style={{ padding: "8px 14px" }}
        >
          ◀ Prev
        </button>

        <button
          onClick={nextMonth}
          disabled={monthIndex >= 11}
          style={{ padding: "8px 14px" }}
        >
          Next ▶
        </button>
        <button onClick={goToToday} style={{ padding: "8px 14px" }}>
          Today
        </button>
      </div>

    </div>
  );
};

export default Calendar;
