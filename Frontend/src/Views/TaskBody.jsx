import TaskCard from "../Components/TaskCard";
import NewTask from "../Components/NewTask";
import { useState, useEffect, useParams } from "react";
import useFetch from "react-fetch-hook";

const TaskBody = function (props) {
    let url = "important"
    if(props.list.id !== undefined){
        url = props.list.id
    }

    const { isLoading, data, error } = useFetch("http://localhost:3000/tasks/" + url);
    let tasks = null;

    if (error) {
        return (
            <div>
                <p>Code: ${error.status}</p>
                <p>Message: ${error.statusText}</p>
            </div>
        );
    }

    if (!isLoading) {
        data.sort((a, b) => Number(a.finished) - Number(b.finished));
        data.sort((a, b) => Number(b.important) - Number(a.important));
        tasks = data.map((task, i) =>{
            return <div className="mb-4" key={i}>
                <TaskCard task={task}/>
            </div>
        })
    }

    return (
        <div>
            <h1 id="titulo">{props.list.name}</h1>
            {tasks}
            <div className="mt-5">
                <NewTask list={url}/>
            </div>
        </div>
    );
};

export default TaskBody;
