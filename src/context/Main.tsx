import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar.tsx'
import Content from './Pages/Content.tsx'
import { StockDetail } from './Pages/Detail.tsx'
export default function Main() { 
    return (
        <>
            <div className={`block w-full h-screen font-Kanit relative bg-background overflow-y-auto`}>
                <Navbar />
                <div className={`block w-full h-fit px-10 pt-16 pb-10 z-0`}>
                    <Routes>
                        <Route path='/' element={<Content />}/>
                        <Route path="/detail/:id" element={<StockDetail />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}