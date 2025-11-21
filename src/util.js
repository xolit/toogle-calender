import dayjs from "dayjs";

export function getMonth(monthIndex = dayjs().month()) {
    const year = dayjs().year();
    
    const firstOfMonth = dayjs(new Date(year, monthIndex, 1));
    const startDay = firstOfMonth.subtract(firstOfMonth.day(), "day");

    const daysMatrix = [];
    let current = startDay;

    for (let row = 0; row < 6; row++) {
        const week = [];
        for (let col = 0; col < 7; col++) {
            week.push(current);
            current = current.add(1, "day");
        }
        daysMatrix.push(week);
    }

    return daysMatrix;
}