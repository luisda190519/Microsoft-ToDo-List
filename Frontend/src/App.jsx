import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./Views/PageNotFound";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import { useState, useEffect } from "react";

const App = function (props) {
    const [user, setUser] = useState(() =>
        localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : false
    );

    const setAuth = function(user){
        setUser(user)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ user ? <Home userID={user.id}/> : <Navigate replace to="/login" /> } />
                <Route path="/login" element={<Login setAuth={setAuth}/>} />
                <Route path="/signup" element={<Signup setAuth={setAuth} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
