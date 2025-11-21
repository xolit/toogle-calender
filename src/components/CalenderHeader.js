import { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../Context/GlobalContext";

const MIN_YEAR = 2023; // earliest allowed year
const MAX_YEAR = 2027; // latest allowed year

const Calendar = ({ onTodayClick }) => {
  const { monthIndex, setMonthIndex, yearIndex, setYearIndex } = useContext(GlobalContext);

  const currentMonth = dayjs(new Date(yearIndex, monthIndex, 1));

  const nextMonth = () => {
    let m = monthIndex + 1;
    let y = yearIndex;
    if (m > 11) {
      m = 0;
      y = yearIndex + 1;
    }
    if (y > MAX_YEAR) return;
    setMonthIndex(m);
    setYearIndex(y);
  };

  const prevMonth = () => {
    let m = monthIndex - 1;
    let y = yearIndex;
    if (m < 0) {
      m = 11;
      y = yearIndex - 1;
    }
    if (y < MIN_YEAR) return;
    setMonthIndex(m);
    setYearIndex(y);
  };

  const goToToday = () => {
    const today = dayjs();
    const tm = today.month();
    const ty = today.year();
    if (ty < MIN_YEAR || ty > MAX_YEAR) {
      setYearIndex(Math.max(MIN_YEAR, Math.min(MAX_YEAR, ty)));
    } else {
      setYearIndex(ty);
    }
    setMonthIndex(tm);
    if (onTodayClick) onTodayClick();
  };


  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h2>
        {currentMonth.format("MMMM")} {currentMonth.format("YYYY")}
      </h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
        <button onClick={prevMonth} disabled={yearIndex <= MIN_YEAR && monthIndex === 0} style={{ padding: "8px 14px" }}>
          ◀ Prev
        </button>

        <button onClick={nextMonth} disabled={yearIndex >= MAX_YEAR && monthIndex === 11} style={{ padding: "8px 14px" }}>
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
