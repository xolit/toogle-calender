import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    yearIndex: new Date().getFullYear(),
    setYearIndex: (y) => {},
});

export default GlobalContext;