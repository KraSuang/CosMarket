import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './context/Main.tsx'

export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}