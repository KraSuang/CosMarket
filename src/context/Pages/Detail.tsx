// StockDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import stockData from '../../../Tools/data/__test__/primary_stock.json'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from '../../components/Button.tsx';
import { Switch } from '@headlessui/react'
import { ReadOnlyCalendar } from '../../components/Calendar.tsx'

interface StockDetailProps { }

interface StockDetailItem {
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
    queue: Array<{
        ident: {
            r_uid : number;
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
            }
        }
    }>;
}

export const StockDetail: React.FC<StockDetailProps> = () => {
    const { id } = useParams<{ id: string }>();
    const [stockItem, setStockItem] = useState<StockDetailItem | null>(null);

    useEffect(() => {
        const parsedId = id ? parseInt(id, 10) : undefined;

        const fetchStockItem = async () => {
            const fetchedStockItem: StockDetailItem | undefined = stockData.find(
                (item) => item.id === parsedId
            );
            setStockItem(fetchedStockItem || null);
        };

        fetchStockItem();
    }, [id]);

    const [enabled, setEnabled] = useState(false)

    console.log(stockItem);

    return (
        <div className={`flex flex-col w-full h-fit px-20 py-10 items-center`}>
            <div className={`flex w-full justify-center mb-8`}>
                <div className={`w-fit bg-content rounded-2xl p-6`}>
                    <Carousel infiniteLoop={true} showStatus={false} width={700} autoPlay={true} dynamicHeight={false} showIndicators={true} showThumbs={false} transitionTime={500}>
                        {[...Array(stockItem?.detail.picture)].map((_, index) => (
                            <div key={index + 1}>
                                <img
                                    className={`w-full h-full max-h-[500px] object-contain rounded-xl`}
                                    src={`../Tools/data/__test__/image/${stockItem?.uid}-${stockItem?.sid}-${stockItem?.id}-${index + 1}.jpg`}
                                    alt={`Picture ${index + 1}`}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className={`flex flex-col justify-between w-fit min-w-[400px] pl-8`}>
                    <div className={`block w-full h-fit bg-content rounded-2xl px-6 py-2`}>
                        <p className='text-xl text-text'>{`${stockItem?.detail.name} ${stockItem?.detail?.version ? `| ${stockItem?.detail?.version}` : ``}`}</p>
                        <p className='text-xs -mt-2 text-text'>{stockItem?.detail.title}</p>
                        <p className='text-2xl text-red-500 my-6'>{`${stockItem?.detail.price.min}-${stockItem?.detail.price.max}฿`}</p>
                    </div>
                    <div className={`block w-full h-fit`}>
                        <div className={`block w-full h-fit bg-content rounded-2xl px-4 py-2`}>
                            <p className='text-text text-md font-medium mb-2'>Size</p>
                            <div className='flex w-full h-fit justify-center mb-4'>
                                {stockItem?.detail.costume.detail.size.detail.map((size, sizeIdx) => {
                                    if (size.type === 1) {
                                        if (stockItem?.detail.costume.detail.size.unit === 'cm' && enabled) {
                                            const sizeMin = Math.floor(size.min / 2.54);
                                            const sizeMax = Math.floor(size.max / 2.54);
                                            return (
                                                <div key={sizeIdx} className='flex flex-col w-fit h-fit items-center mx-4'>
                                                    <p className={`text-2xs text-text`}>Breast</p>
                                                    <p className={`text-3xs -mt-1 text-text`}>{`${sizeMin}-${sizeMax} inch`}</p>
                                                </div>
                                            )
                                        }
                                        else if (stockItem?.detail.costume.detail.size.unit === 'inch' && !enabled) {
                                            const sizeMin = Math.floor(size.min * 2.54);
                                            const sizeMax = Math.floor(size.max * 2.54);
                                            return (
                                                <div key={sizeIdx} className='flex flex-col w-fit h-fit items-center mx-4'>
                                                    <p className={`text-2xs text-text`}>Breast</p>
                                                    <p className={`text-3xs -mt-1 text-text`}>{`${sizeMin}-${sizeMax} cm`}</p>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div key={sizeIdx} className='flex flex-col w-fit h-fit items-center mx-4'>
                                                    <p className={`text-2xs text-text`}>Breast</p>
                                                    <p className={`text-3xs -mt-1 text-text`}>{`${size.min}-${size.max} ${stockItem?.detail.costume.detail.size.unit}`}</p>
                                                </div>
                                            )
                                        }
                                    }

                                    if (size.type === 2) {
                                        if (stockItem?.detail.costume.detail.size.unit === 'cm' && enabled) {
                                            const sizeMin = Math.floor(size.min / 2.54);
                                            const sizeMax = Math.floor(size.max / 2.54);
                                            return (
                                                <div key={sizeIdx} className='flex flex-col w-fit h-fit items-center mx-4'>
                                                    <p className={`text-2xs text-text`}>Hip</p>
                                                    <p className={`text-3xs -mt-1 text-text`}>{`${sizeMin}-${sizeMax} inch`}</p>
                                                </div>
                                            )
                                        }
                                        else if (stockItem?.detail.costume.detail.size.unit === 'inch' && !enabled) {
                                            const sizeMin = Math.floor(size.min * 2.54);
                                            const sizeMax = Math.floor(size.max * 2.54);
                                            return (
                                                <div key={sizeIdx} className='flex flex-col w-fit h-fit items-center mx-4'>
                                                    <p className={`text-2xs text-text`}>Hip</p>
                                                    <p className={`text-3xs -mt-1 text-text`}>{`${sizeMin}-${sizeMax} cm`}</p>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div key={sizeIdx} className='flex flex-col w-fit h-fit items-center mx-4'>
                                                    <p className={`text-2xs text-text`}>Hip</p>
                                                    <p className={`text-3xs -mt-1 text-text`}>{`${size.min}-${size.max} ${stockItem?.detail.costume.detail.size.unit}`}</p>
                                                </div>
                                            )
                                        }
                                    }

                                    if (size.type === 3) {
                                        if (stockItem?.detail.costume.detail.size.unit === 'cm' && enabled) {
                                            const sizeMin = Math.floor(size.min / 2.54);
                                            const sizeMax = Math.floor(size.max / 2.54);
                                            return (
                                                <div key={sizeIdx} className='flex flex-col w-fit h-fit items-center mx-4'>
                                                    <p className={`text-2xs text-text`}>Waist</p>
                                                    <p className={`text-3xs -mt-1 text-text`}>{`${sizeMin}-${sizeMax} inch`}</p>
                                                </div>
                                            )
                                        }
                                        else if (stockItem?.detail.costume.detail.size.unit === 'inch' && !enabled) {
                                            const sizeMin = Math.floor(size.min * 2.54);
                                            const sizeMax = Math.floor(size.max * 2.54);
                                            return (
                                                <div key={sizeIdx} className='flex flex-col w-fit h-fit items-center mx-4'>
                                                    <p className={`text-2xs text-text`}>Waist</p>
                                                    <p className={`text-3xs -mt-1 text-text`}>{`${sizeMin}-${sizeMax} cm`}</p>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div key={sizeIdx} className='flex flex-col w-fit h-fit items-center mx-4'>
                                                    <p className={`text-2xs text-text`}>Waist</p>
                                                    <p className={`text-3xs -mt-1 text-text`}>{`${size.min}-${size.max} ${stockItem?.detail.costume.detail.size.unit}`}</p>
                                                </div>
                                            )
                                        }
                                    }
                                })}
                            </div>
                            <div className={`flex w-full h-fit justify-end`}>
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className={`bg-button
                                relative inline-flex h-[32px] w-[100px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`${enabled ? 'translate-x-[46px]' : 'translate-x-0'}
                                pointer-events-none inline-block h-[28px] w-[50px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                    <p className={`absolute top-[1.2px] left-[14px] transition-all duration-200 ${enabled ? `text-white` : `text-text`}`}>cm</p>
                                    <p className={`absolute top-[1.5px] right-[9.5px] transition-all duration-200 ${enabled ? `text-text` : `text-white`}`}>inch</p>
                                </Switch>
                            </div>
                        </div>
                    </div>
                    <div className={`block w-full h-fit bg-content rounded-2xl px-4 py-2`}>
                            <p className='text-text text-md font-medium mb-2'>Choose</p>
                            <div className={`flex w-full h-fit py-2 justify-center`}>
                                <Button label='Test' className='border-2 border-button text-text hover:bg-button hover:text-text-hover w-full mr-1' />
                                <Button label='Private' className='border-2 border-button text-text hover:bg-button hover:text-text-hover w-full ml-1' />
                            </div>
                            <div className={`flex w-full h-fit py-2 justify-center`}>
                                <Button label='Wig' className='border-2 border-button text-text hover:bg-button hover:text-text-hover w-full mr-1' />
                                <Button label='Costume' className='border-2 border-button text-text hover:bg-button hover:text-text-hover w-full mx-2' />
                                <Button label='Prop' className='border-2 border-button text-text hover:bg-button hover:text-text-hover w-full ml-1' />
                            </div>
                        </div>
                </div>
            </div>
            <div className={`w-full h-fit bg-content rounded-2xl`}>
                <ReadOnlyCalendar queue={stockItem?.queue}/>
            </div>
        </div>
    );
};
