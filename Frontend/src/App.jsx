import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./Views/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = function (props) {
    const [userID, setUserID] = useState(false);
    const { auth, setAuth } = useState();

    const setUsername = function(username){
        setUserID(username.id)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home userID={userID}/>} />
                <Route path="/login" element={<Login setUsername={setUsername}/>} />
                <Route path="/signup" element={<Signup setUsername={setUsername}/>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
