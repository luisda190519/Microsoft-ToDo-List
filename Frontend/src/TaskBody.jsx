import TaskCard from "./TaskCard";
import NewTask from "./NewTask";
import { useState } from "react";

const TaskBody = function (props) {

    let [text, setText] = useState("")

    const getListData = async function(){
        const result = await fetch("http://localhost:3000/tasks")
        .then((data) =>{
            return data.json()
        })
        .catch((err) =>{
            return false
        })       
    }

    setText(getListData)
    console.log(text);

    return (
        <div>
            <h1 id="titulo">Titulo</h1>
            <TaskCard />
            <div style={{marginTop:"40%"}}>
                <NewTask />
            </div>
        </div>
    );
};

export default TaskBody;
