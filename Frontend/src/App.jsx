import { useState } from "react";
import Sidebar from "./Views/Sidebar";
import TaskBody from "./Views/TaskBody";
import "./TaskBody.css"

const App = function (props) {
    return <div className="container w-75" id="taskbody">
      <TaskBody/>
    </div>
};

export default App;
