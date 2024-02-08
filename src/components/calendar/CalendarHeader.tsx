import { useContext } from 'react'
import dayjs from 'dayjs'
import { Button } from '../../components/Button.tsx'
import CalendarGlobarContext from '../../context/calendar/CalendarGlobalContext.tsx'

export default function CalendarHeader() {

    const { monthIndex, setMonthIndex } = useContext(CalendarGlobarContext);

    const handlePrevMonth = () => {
        setMonthIndex( monthIndex - 1 );
    }

    const handleNextMonth = () => {
        setMonthIndex( monthIndex + 1 );
    }

    return(
        <header className={`flex w-full h-fit px-10 py-6 justify-between`}>
            <Button label='Prev Month' className='bg-button rounded-lg text-button-title' onClick={handlePrevMonth}/>
            <p className={`text-xl`}>{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}</p>
            <Button label='Next Month' className='bg-button rounded-lg text-button-title' onClick={handleNextMonth}/>
        </header>
    )
}