import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Sidebar from "./Views/Sidebar";
import TaskBody from "./Views/TaskBody";
import PageNotFound from "./Views/PageNotFound";

//Css
import "./CSS/TaskBody.css"

const App = function (props) {
    return (
      <BrowserRouter>
            <div className="container w-75" id="taskbody">
                <Routes>
                    <Route path="/list/:listID" element={<TaskBody/>} />
                    <Route path="*" exact element={<PageNotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default App;
