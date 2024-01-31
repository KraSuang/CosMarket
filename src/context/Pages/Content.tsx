import { DropdownFilter } from "../../components/Filter.tsx"

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
    { id: 1, name: "Most Popular" },
    { id: 2, name: "Top Rate" },
    { id: 3, name: "A-Z" },
    { id: 4, name: "Z-A" },
]

export default function Content() {
    return (
        <>
            <div className={`block w-full h-fit`}>
                <div className={`flex w-full h-fit justify-center items-center`}>
                    <DropdownFilter title={`Fandom`} items={fandom} />
                    <DropdownFilter title={`Version`} items={version} />
                    <DropdownFilter title={`Category`} items={category} />
                    <DropdownFilter title={`Size`} items={size} />
                    <DropdownFilter title={`Sort`} items={sortby} />
                </div>
                <div className={`flex w-full h-fit`}>
                    <div className={`flex w-full h-fit justify-center items-start`}>
                        <div className={`my-4 grid grid-cols-5 gap-2`}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}