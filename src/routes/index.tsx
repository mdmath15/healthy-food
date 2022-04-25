import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import PageNotFound from "../pages/PageNotFound"
import SingUp from "../pages/SingUp"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/singup" element={<SingUp />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
