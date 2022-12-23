import TaskCard from "../Components/TaskCard";
import NewTask from "../Components/NewTask";
import { useState, useEffect, useParams } from "react";
import useFetch from "react-fetch-hook";
import { getRequest, deleteRequest } from "../Components/Request";

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

    const deleteList = async function(e){
        const res = await deleteRequest("/list/" + url);
        props.setListParent({name:"Important"})
    }

    if (props.list.id !== undefined) {
        url = props.list.id;
        listTasks();
    }

    useEffect(() => {
        listTasks();
    }, []);

    <div class="input-group input-group-lg my-5" id="titulo">
        <input type="text" class="form-control" value={props.list.name} />
        <i class="bi bi-trash3 input-group-text"></i>
    </div>;

    return (
        <div>
            <div className="d-flex mb-4">
                <h1 id="titulo">{props.list.name}</h1>
                <div className="mx-4">
                    <i className="bi bi-trash3" id="trashIcon" onClick={(e) => deleteList(e)}></i>
                    <i className="bi bi-pencil mx-3" id="pencilIcon"></i>
                </div>
            </div>

            {tasks.map((task, i) => {
                return (
                    <div className="mb-4" key={task.id}>
                        <TaskCard task={task} listTasks={listTasks} />
                    </div>
                );
            })}
            <div className="mt-5">
                <NewTask list={url} />
            </div>
        </div>
    );
};

export default TaskBody;
