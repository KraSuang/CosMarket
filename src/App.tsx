import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './context/Main.tsx'
import Authentication from './context/Authentication.tsx'

export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Main />} />
                    <Route path="/authentication/*" element={<Authentication />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}