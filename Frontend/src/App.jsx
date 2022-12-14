import { useState } from "react";
import Sidebar from "./Sidebar";
import TaskBody from "./TaskBody";
import "./TaskBody.css"

const App = function (props) {
    return <div className="container w-75" id="taskbody">
      <TaskBody/>
    </div>
};

export default App;
