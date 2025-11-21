import React, { useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "./GlobalContext";

const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [yearIndex, setYearIndex] = useState(dayjs().year());

  return (
    <div>
      <GlobalContext.Provider
        value={{ monthIndex, setMonthIndex, yearIndex, setYearIndex }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default ContextWrapper;