import React from 'react'

const CalendarGlobarContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (_index: any) => {}
})

export default CalendarGlobarContext