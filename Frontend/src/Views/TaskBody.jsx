import TaskCard from "../Components/TaskCard";
import NewTask from "../Components/NewTask";
import { useState, useEffect, useParams } from "react";
import useFetch from "react-fetch-hook";
import { getRequest, deleteRequest, putRequest } from "../Components/Request";

const TaskBody = function (props) {
    let url = "important";
    const [tasks, setTasks] = useState([]);
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(props.list.name);

    const listTasks = async function () {
        try {
            const data = await getRequest("/tasks/" + url);
            data.sort((a, b) => Number(a.finished) - Number(b.finished));
            data.sort((a, b) => Number(b.important) - Number(a.important));
            setTasks(data);
            setText(props.list.name)
        } catch (error) {
            console.log(error);
        }
    };

    const deleteList = async function (e) {
        const res = await deleteRequest("/list/" + url);
        props.setListParent({ name: "Important" });
    };

    const handleChange = function(e){
        setText(e.target.value)
        props.list.name = e.target.value
    }

    const editList = function (e) {
        setEdit(!edit);
    };

    const editName = async function(e){
        let data = {
            name:text,
            active:false
        }
        const res = await putRequest("/list/" + url, data)
        setEdit(!edit);
        props.setListParent(res);
    }

    if (props.list.id !== undefined) {
        url = props.list.id;
        listTasks();
    }

    useEffect(() => {
        listTasks();
    }, []);

    return (
        <div>
            <div className="mb-4">
                <div>
                    {edit ? (
                        <div
                            className="input-group input-group-lg mb-5"
                            id="titulo"
                        >
                            <input
                                type="text"
                                className="form-control"
                                value={text}
                                onChange={(e) => handleChange(e)}
                            />
                            <button className="btn btn-success" type="button" onClick={(e) => editName(e)}>Submit</button>
                        </div>
                    ) : (
                        <div className="d-flex mb-4">
                            <h1 id="titulo">{props.list.name}</h1>
                            <div className="mx-4">
                                <i
                                    className="bi bi-trash3"
                                    id="trashIcon"
                                    onClick={(e) => deleteList(e)}
                                ></i>
                                <i
                                    className="bi bi-pencil mx-3"
                                    id="pencilIcon"
                                    onClick={(e) => editList(e)}
                                ></i>
                            </div>
                        </div>
                    )}
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
