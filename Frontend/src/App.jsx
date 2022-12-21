import { useState } from "react";

//Components
import Sidebar from "./Views/Sidebar";
import TaskBody from "./Views/TaskBody";
import PageNotFound from "./Views/PageNotFound";
import NewList from "./Views/NewList";

//Css
import "./CSS/TaskBody.css";

const App = function (props) {
    const [list, setList] = useState({name:"Important"});

    const setListBySideBar = function(list){
      setList(list)
    } 

    return (
        <div>
            <Sidebar setListParent={setListBySideBar}/>
            <div className="container w-75" id="taskbody">
                {list ? <TaskBody list={list} /> : <NewList/>}
            </div>
        </div>
    );
};

export default App;
