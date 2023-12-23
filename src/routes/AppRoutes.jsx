import  { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}