import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./Views/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = function (props) {
    const [userID, setUserID] = useState(false);

    const setUsername = function(username){
        setUserID(username.id)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
