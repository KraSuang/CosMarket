import React, { useState, useContext, useEffect } from 'react';
import { getMonth } from '../utilities/calendar';
import Month from '../components/calendar/Month.tsx'
import CalendarHeader from './calendar/CalendarHeader.tsx';
import CalendarGlobarContext from '../context/calendar/CalendarGlobalContext.tsx';

interface ReadOnlyCalendarProps {
    queue?: {
        ident: {
            r_uid: number;
        };
        detail: {
            choose: {
                costume: boolean;
            };
            total_price: {
                rent_price: number;
                del_price: number;
            };
            duration: {
                start: string;
                end: string;
            };
        };
    }[];
}

export function ReadOnlyCalendar({ queue }: ReadOnlyCalendarProps) {

    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex } = useContext(CalendarGlobarContext)

    console.log(queue)

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <React.Fragment>
            <div className={`flex w-full h-fit flex-col`}>
                <CalendarHeader />
                <div className={`flex w-full`}>
                    <Month month={currentMonth} queue={queue} />
                </div>
            </div>
        </React.Fragment>
    )
}