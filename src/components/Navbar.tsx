import { FaMagnifyingGlass } from "react-icons/fa6";


export default function Navbar() {
    return (
        <header className={`fixed flex w-full h-[48px] justify-between items-center px-4 py-1.5 shadow-md z-10 bg-background-navbar`}>
            <div className={`flex w-1/3 h-fit justify-start items-center`}>
                <p className={`text-sm font-semibold text-text`}>CosMarket</p>
            </div>
            <div className={`flex w-1/3 h-full justify-center items-center`}>
                <div className={`flex w-full max-w-[400px] h-full items-center relative`}>
                    <FaMagnifyingGlass className={`text-3xs absolute left-2.5 text-text`}/>
                    <input type="text" placeholder="Search Here..." className={`flex w-full h-full items-center py-2 bg-searchbar rounded-md pl-8 pr-4`}/>
                </div>
            </div>
            <div className={`flex w-1/3 h-fit justify-end items-center`}>
                
            </div>
        </header>
    )
}