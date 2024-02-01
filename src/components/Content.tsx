import Rating from '@mui/material/Rating';

interface StockDataProps {
    data: {
        id: number;
        sid: number;
        uid: number;
        detail: {
            name: string;
            title: string;
            version: string;
            description: string;
            rate: number;
            review: number;
            wig: {
                status: boolean;
                seperate: {
                    status: boolean;
                    price: number;
                };
            };
            costume: {
                status: boolean;
                detail: {
                    size: {
                        overall: string;
                        detail: Array<{
                            type: number;
                            min: number;
                            max: number;
                        }>;
                        unit: string;
                    };
                    price: {
                        test: number;
                        private: number;
                    };
                };
                seperate: {
                    status: boolean;
                    price: number;
                };
            };
            prop: {
                [key: string]: {
                    status: boolean;
                    pieces: number;
                    seperate: {
                        status: boolean;
                    };
                };
            };
            picture: number;
            status: number;
            price: {
                min: number;
                max: number;
            };
        };
    }[];
}

interface StockStatusProps {
    status: number
}

export function StockStatus({ status }: StockStatusProps) {

    if (status === 0) {
        return (
            <div className={`flex w-fit h-fit px-3 py-0.5 bg-red-500 rounded-lg`}>
                <p className={`text-5xs text-white`}>Not Ready</p>
            </div>
        )
    }
    else if (status === 1) {
        return (
            <div className={`flex w-fit h-fit px-3 py-0.5 bg-green-500 rounded-lg`}>
                <p className={`text-5xs text-white`}>Ready</p>
            </div>
        )
    }
}

export function StockGrid({ data, ...rest }: StockDataProps) {
    const designConfig = {
        stock_div: "max-w-[300px]",
        stock_img: "max-w-[300px] max-h-[400px]"
    };

    return (
        <div className={`grid grid-cols-4 gap-5`}>
            {data.map((item) => (
                <div className={`block w-full h-fit bg-white rounded-xl ${designConfig.stock_div} shadow-md relative transition-all duration-200 hover:scale-[1.02]`} {...rest}>
                    <img
                        key={`${item.uid}-${item.sid}-${item.id}`}
                        className={`w-full h-full ${designConfig.stock_img} rounded-xl`}
                        src={`Tools/data/__test__/image/${item.uid}-${item.sid}-${item.id}-1.jpg`}
                        alt={`${item.uid}-${item.sid}-${item.id}`}
                    />
                    <div className={`block w-full h-fit pb-2 px-3`}>
                        <p className={`text-md text-text`}>{`${item.detail.name} ${item?.detail?.version?  `| ${item?.detail?.version}` : ``}`}</p>
                        <p className={`text-3xs -mt-2 text-text`}>{item.detail.title}</p>
                        <p className={`text-md text-red-500 my-1`}>{`${item.detail.price.min}-${item.detail.price.max}฿`}</p>
                        <div className={`flex w-full h-fit justify-start items-center`}>
                            <Rating name="half-rating-read" defaultValue={item.detail.rate} precision={0.5} readOnly size="small" />
                            <p className={`text-4xs text-text ml-2`}>{`${item.detail.review} Reviews`}</p>
                        </div>
                        <div className={`flex w-full h-fit justify-start items-center mt-2`}>
                            <StockStatus status={item?.detail.status} />
                        </div>
                    </div>
                    <div className={`absolute -top-4 -right-4 flex min-w-10 h-10 px-3 shadow-md justify-center items-center rounded-full bg-white text-text text-xs font-medium`}>
                        {item.detail.costume.detail.size.overall}
                    </div>
                </div>
            ))}
        </div>
    );
}

// export function StockLine({ data }: StockDataProps) {
//     const designConfig = {
//         stock_img: "max-h-[280px]"
//     };

//     return (
//         <div className={`inline-block w-fit h-fit`}>
//             {data.map((item) => (
//                 <div className={`flex w-full min-w-[1000px] h-[280px] bg-white rounded-xl shadow-md`}>
//                     <img
//                         key={`${item.uid}-${item.sid}-${item.id}`}
//                         className={`w-fit h-full ${designConfig.stock_img} rounded-xl`}
//                         src={`Tools/data/__test__/image/${item.uid}-${item.sid}-${item.id}-1.jpg`}
//                         alt={`${item.uid}-${item.sid}-${item.id}`}
//                     />
//                     <div className={`flex flex-col justify-between w-full pb-2 px-3`}>
//                         <div className={`block w-full h-fit`}>
//                             <p className={`text-xl text-text`}>{item.detail.name}</p>
//                             <p className={`text-xs -mt-2 text-text`}>{item.detail.title}</p>
//                         </div>
//                         <p className={`text-md text-red-500 my-1`}>{`${item.detail.price.min}-${item.detail.price.max}฿`}</p>
//                         <div className={`flex w-full h-fit justify-start items-center`}>
//                             <Rating name="half-rating-read" defaultValue={item.detail.rate} precision={0.5} readOnly size="small" />
//                             <p className={`text-4xs text-text ml-2`}>{`${item.detail.review} Reviews`}</p>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }