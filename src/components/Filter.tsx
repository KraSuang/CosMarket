import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

interface DropdownFilterProps {
    title: string,
    items: { name: string }[]
}

export function DropdownFilter({ title, items }: DropdownFilterProps) {
    return (
        <Menu as="div" className="relative inline-block text-left mx-2">
            <div>
                <Menu.Button className={`inline-flex w-full justify-center rounded-lg bg-filter-background transition-all duration-200 group px-4 py-1.5 font-medium focus:outline-none shadow-md items-center`}>
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
                            <p className={`text-5xs text-nowrap text-text font-medium mr-10`}>{item?.name}</p>
                        </div>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}