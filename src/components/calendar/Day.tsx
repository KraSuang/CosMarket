import { useContext, useState } from 'react';
import dayjs from 'dayjs';
import CalendarGlobalContext from '../../context/calendar/CalendarGlobalContext';

interface DayProps {
    day: Date | null;
    rowIdx: number;
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

function isDayInRange(currentDay: dayjs.Dayjs, start: string, end: string) {
    const startDate = dayjs(start);
    const endDate = dayjs(end);

    return currentDay.isSame(startDate) || (currentDay.isAfter(startDate) && currentDay.isBefore(endDate.add(1, 'day')));
}

export default function Day({ day, rowIdx, queue }: DayProps) {
    const dayObject = day ? dayjs(day) : null;
    const { monthIndex } = useContext(CalendarGlobalContext);

    // State to store the matched r_uid
    const [matchedRUid, setMatchedRUid] = useState<number | null>(null);

    function getCurrentMonthClass() {
        const currentMonthYear = dayObject?.format('YYYY-MM');
        const selectedMonthYear = dayjs(new Date(dayjs().year(), monthIndex)).format('YYYY-MM');

        return currentMonthYear === selectedMonthYear ? 'opacity-100' : 'opacity-30';
    }

    function getDayClass(dayObject: dayjs.Dayjs | null, queue?: DayProps['queue']): string {
        if (queue && dayObject) {
            for (const item of queue) {
                const { start, end } = item.detail.duration;

                const startOfDay = dayjs(start).startOf('day').format('YYYY-MM-DD');
                const endOfDay = dayjs(end).endOf('day').format('YYYY-MM-DD');

                console.log({ startDate: startOfDay, endDate: endOfDay })

                if (dayObject.isSame(startOfDay)) {
                    if (matchedRUid !== item.ident.r_uid) {
                        setMatchedRUid(item.ident.r_uid);
                    }

                    return 'bg-red-400 rounded-l-2xl text-white w-full';
                } else if (dayObject.isSame(endOfDay)) {
                    // End date style
                    return 'bg-red-400 rounded-r-2xl text-white w-full';
                } else if (isDayInRange(dayObject, startOfDay, endOfDay)) {
                    // Date in the range style
                    // Do not set matchedRUid for dates in the range
                    return 'bg-red-400 text-white w-full';
                }
            }
        }

        return dayObject?.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-10' : '';
    }

    return (
        <div className={`flex flex-col`}>
            {rowIdx === 0 && dayObject && (
                <header className={`flex flex-col items-center border`}>
                    <p className={`text-2xs my-2`}>{dayObject.format('ddd').toUpperCase()}</p>
                </header>
            )}
            <header className={`flex flex-col items-center relative border`}>
                <p className={`text-2xs p-1 mb-10 text-center ${getCurrentMonthClass()}`}>
                    {dayObject ? dayObject.format('DD') : ''}
                </p>
                <div className={`absolute top-11 ${getDayClass(dayObject, queue)}`}>
                    <p className={`flex items-center pl-4 text-2xs h-8 text-center ${dayObject?.isSame}`}>
                        {/* Use matchedRUid as needed */}
                        {matchedRUid !== null && <span>{matchedRUid}</span>}
                    </p>
                </div>
            </header>
        </div>
    );
}
