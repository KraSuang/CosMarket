import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import CalendarGlobarContext from './CalendarGlobalContext.tsx';
import dayjs from 'dayjs'

export default function CalendarContextWrapper(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {

    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    return(
        <CalendarGlobarContext.Provider value={{ monthIndex, setMonthIndex }}>
            {props.children}
        </CalendarGlobarContext.Provider>
    )
}