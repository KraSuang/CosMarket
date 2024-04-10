import dayjs from 'dayjs';

export function getMonth(month = dayjs().month()) {
    month = Math.floor(month);
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    const totalDaysInMonth = dayjs(new Date(year, month + 1, 0)).date(); // Get the total days in the month
    const totalWeeksInMonth = Math.ceil((totalDaysInMonth + firstDayOfTheMonth) / 7); // Calculate total weeks
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(totalWeeksInMonth).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount)).toDate(); // Convert Dayjs to Date
        });
    });

    return daysMatrix;
}
