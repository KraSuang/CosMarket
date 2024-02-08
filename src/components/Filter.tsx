import { Menu, Transition, Listbox } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import { useState } from 'react'

interface DropdownCheckBoxFilterProps {
    title: string;
    items: { name: string }[]
}

interface DropdownButtonFilterProps {
    title: string;
    items: { name: string, icon: ReactNode; }[]
}

export function DropdownCheckBoxFilter({ title, items }: DropdownCheckBoxFilterProps) {
    return (
        <Menu as="div" className="relative inline-block text-left mx-2 z-40">
            <div>
                <Menu.Button className={`inline-flex w-full justify-center rounded-lg bg-filter-background transition-all duration-200 group px-4 py-1.5 shadow-md items-center`}>
                    <p className={`transition-all duration-200 text-5xs text-text group-hover:scale-105`}>{title}</p>
                    <FaAngleDown
                        className={`-mr-1 ml-2 text-4xs text-text`}
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    {items.map((item, index) => (
                        <div key={index} className={`flex w-full h-fit pl-3 pr-4 py-2 justify-start items-center`}>
                            <input type="checkbox" className='flex mr-2 w-[10px]' placeholder='Test' />
                            <p className={`text-5xs text-nowrap text-text font-normal mr-10`}>{item?.name}</p>
                        </div>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export function DropdownButtonFilter({ title, items }: DropdownButtonFilterProps) {

    const [selected, setSelected] = useState(items[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative mx-2 z-40">
                <Listbox.Button className={`inline-flex relative w-full cursor-default rounded-lg bg-white py-1.5 px-4 text-left shadow-md justify-between sm:text-sm items-center`}>
                    <p className={`transition-all duration-200 text-5xs text-text group-hover:scale-105`}>{title}</p>
                    <FaAngleDown
                        className={`text-4xs text-text -mr-1 ml-2`}
                        aria-hidden="true"
                    />
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute right-0 mt-2 max-h-60 divide-y divide-gray-100 w-fit overflow-auto rounded-md transition-all duration-200 bg-white text-base shadow-lg focus:outline-none sm:text-sm ring-1 ring-black/5">
                        {items.map((item, itemIdx) => (
                            <Listbox.Option
                                key={itemIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-1.5 text-nowrap text-5xs transition-all duration-200 ${active ? 'bg-filter-background-selected text-filter-text-selected' : 'text-text'
                                    }`
                                }
                                value={item}
                            >
                                {({ selected }) => (
                                    <>
                                        <div className={`flex w-fit h-fit items-center px-4`}>
                                            <p className={`block truncate text-xs mr-2 ${selected ? 'font-medium' : 'font-normal'}`}>{item.icon}</p>
                                            <p className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                {item.name}
                                            </p>
                                        </div>

                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}