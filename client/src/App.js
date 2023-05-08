import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Blogs />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    );
}

export default App;

// start with 2:18:00
