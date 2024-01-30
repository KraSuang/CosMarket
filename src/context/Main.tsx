import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar.tsx'
export default function Main() {
    return (
        <>
            <div className={`block w-full h-screen font-IBM relative bg-background overflow-y-auto`}>
                <Navbar />
                <div className={`block w-full h-fit px-10 pt-16 pb-10`}>
                    
                </div>
            </div>
        </>
    )
}