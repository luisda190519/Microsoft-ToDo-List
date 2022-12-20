import TaskCard from "../Components/TaskCard";
import NewTask from "../Components/NewTask";
import { useState, useEffect, useParams } from "react";
import { getRequest } from "../Components/Request";

const TaskBody = function (props) {
    //const params = useParams();

    const getTasks = async function(){
        try {
            const res = await getRequest("/tasks/1")
            console.log(res);
        } catch (error) {
            
        }
    }

    useEffect(() =>{
        getTasks();
    },[]);

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
