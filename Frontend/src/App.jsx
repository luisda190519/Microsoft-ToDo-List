import { useState } from "react";

//Components
import Sidebar from "./Views/Sidebar";
import TaskBody from "./Views/TaskBody";

//Css
import "./CSS/TaskBody.css"

const App = function (props) {
    return <div className="container w-75" id="taskbody">
      <TaskBody/>
    </div>
};

export default App;
