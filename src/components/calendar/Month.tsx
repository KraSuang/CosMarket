import Day from './Day.tsx';
import React from 'react';

interface MonthProps {
    month: (Date | null)[][];
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


const Month: React.FC<MonthProps> = ({ month, queue }) => {

    return (
        <div className={`flex-1`}>
            <div className={`grid grid-cols-7`}>
                {month.map((row, index) => (
                    <React.Fragment key={index}>
                        {row.map((day, dayidx) => (
                            <Day day={day} key={dayidx} rowIdx={index} queue={queue} />
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Month; 
