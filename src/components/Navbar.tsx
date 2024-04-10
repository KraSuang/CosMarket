import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import stockData from '../../Tools/data/__test__/primary_stock.json'
import { Link } from 'react-router-dom'
import { DropdownProfileNav } from './DropdownMenu.tsx'

function SearchBarResult({ results, handleResultClick }) {
    return (
        <div className="absolute z-50 top-full left-0 block w-full h-fit py-2 px-4 bg-white border border-gray-300 rounded-md mt-1 overflow-hidden shadow-md ring-1 ring-black/5 ">
            {results.map((result) => (
                <Link
                    key={result.id}
                    to={`/detail/${result.id}`}
                    className="cursor-pointer hover:bg-gray-100 flex w-full h-full justify-start items-center"
                    onClick={() => handleResultClick()}
                >
                    <img src={`../Tools/data/__test__/image/${result.uid}-${result.sid}-${result.id}-1.jpg`} className={`w-full max-w-[80px] h-full`} />
                    <div className={`flex flex-col w-full h-full justify-between ml-4`}>
                        <p className={``}>{result.detail.name} | {result.detail.title}</p>
                        <p className={``}>By ชื่อร้าน</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default function Navbar() {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Filter stock data based on the search query
        const filteredResults = stockData.filter(result =>
            result.detail.name.toLowerCase().includes(query.toLowerCase())
        );

        setSearchResults(filteredResults);
    };


    const handleResultClick = () => {
        setSearchQuery('')
        setSearchResults([])
    };

    return (
        <header className={`fixed flex w-full h-[48px] justify-between items-center px-4 py-1.5 shadow-md z-50 bg-background-navbar`}>
            <div className={`flex w-1/3 h-fit justify-start items-center`}>
                <a href={`/`} className={`text-sm font-semibold text-text`}>CosMarket</a>
            </div>
            <div className={`flex w-1/3 h-full justify-center items-center`}>
                <div className={`flex w-full max-w-[400px] h-full items-center relative`}>
                    <FaMagnifyingGlass className={`text-3xs absolute left-2.5 text-text`} />
                    <input
                        type="text"
                        placeholder="Search Here..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        className={`flex w-full h-full items-center py-2 bg-searchbar rounded-md pl-8 pr-4`} />
                    {searchQuery && (
                        <SearchBarResult results={searchResults} handleResultClick={handleResultClick} />
                    )}
                </div>
            </div>
            <div className={`flex w-1/3 h-fit justify-end items-center`}>
                <DropdownProfileNav />
            </div>
        </header>
    )
}