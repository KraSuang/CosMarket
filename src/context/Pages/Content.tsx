import { DropdownCheckBoxFilter, DropdownButtonFilter } from "../../components/Filter.tsx"
import { StockGrid } from "../../components/Content.tsx"
import stockData from '../../../Tools/data/__test__/stock.json'
import { BsSortAlphaDown, BsSortAlphaDownAlt, BsSortDown } from "react-icons/bs";
// import { IconButton } from "../../components/Button.tsx"
// import { IoGrid, IoGridOutline } from "react-icons/io5";
// import { TfiLayoutListThumbAlt, TfiLayoutListThumb } from "react-icons/tfi";
// import { useState } from "react";

const fandom = [
    { id: 1, name: "Anime" },
    { id: 2, name: "Game" },
    { id: 3, name: "VTuber" }
]

const version = [
    { id: 1, name: "Main" },
    { id: 2, name: "Extension" },
    { id: 3, name: "Fan Art" }
]

const category = [
    { id: 1, name: "Costume" },
    { id: 2, name: "Prop" }
]

const size = [
    { id: 1, name: "XS" },
    { id: 2, name: "S" },
    { id: 3, name: "M" },
    { id: 4, name: "L" },
    { id: 5, name: "XL" },
    { id: 6, name: "2XL" },
    { id: 7, name: "3XL" },
    { id: 8, name: "Free Size" }
]

const sortby = [
    { id: 1, name: "Top Rate", icon: <BsSortDown />},
    { id: 2, name: "A-Z", icon: <BsSortAlphaDown />},
    { id: 3, name: "Z-A", icon: <BsSortAlphaDownAlt />},
]

export default function Content() {
    return (
        <>
            <div className={`block w-full h-fit`}>
                <div className={`flex w-full h-fit justify-center z-50 items-center`}>
                    <DropdownCheckBoxFilter title={`Fandom`} items={fandom} />
                    <DropdownCheckBoxFilter title={`Version`} items={version} />
                    <DropdownCheckBoxFilter title={`Category`} items={category} />
                    <DropdownCheckBoxFilter title={`Size`} items={size} />
                    <DropdownButtonFilter title={`Sort`} items={sortby} />
                </div>
                <div className={`flex w-full h-fit mt-8 z-0 justify-center`}>
                    <div className={`flex w-fit h-fit justify-center items-start`}>
                        <StockGrid data={stockData}/>
                    </div>
                </div>
            </div>
        </>
    )
}