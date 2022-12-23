import TaskCard from "../Components/TaskCard";
import NewTask from "../Components/NewTask";
import { useState, useEffect, useParams } from "react";
import useFetch from "react-fetch-hook";
import { getRequest } from "../Components/Request";

const TaskBody = function (props) {
    let url = "important";
    const [tasks, setTasks] = useState([]);

    const listTasks = async function () {
        try {
            const data = await getRequest("/tasks/" + url);
            data.sort((a, b) => Number(a.finished) - Number(b.finished));
            data.sort((a, b) => Number(b.important) - Number(a.important));
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    if (props.list.id !== undefined) {
        url = props.list.id;
        listTasks();
    }

    useEffect(() => {
        listTasks();
    }, []);

    return (
        <div>
            <h1 id="titulo">{props.list.name}</h1>
            {
                (tasks.map((task, i) => {
                    return (
                        <div className="mb-4" key={task.id}>
                            <TaskCard task={task} listTasks={listTasks}/>
                        </div>
                    );
                }))
            }
            <div className="mt-5">
                <NewTask list={url} />
            </div>
        </div>
    );
};

export default TaskBody;
