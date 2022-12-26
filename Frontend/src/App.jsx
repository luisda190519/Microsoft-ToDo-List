import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./Views/PageNotFound";
import AuthProvider from "./Components/authProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = function () {
    const [userID, setUserID] = useState(false);
    console.log(AuthProvider());
    const { auth, setAuth } = AuthProvider().props.value
    const elements = Object.keys(auth).length > 0

    const setUsername = function(username){
        setUserID(username.id)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={elements ? <Home userID={userID} setAuth={setAuth}/> : <Navigate replace to="/login" />} />
                <Route path="/login" element={elements ? <Navigate replace to="/" /> : <Login setUsername={setAuth}/>} />
                <Route path="/signup" element={elements ? <Navigate replace to="/" /> : <Signup setUsername={setAuth}/>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
