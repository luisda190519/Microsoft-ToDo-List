import { putRequest, deleteRequest } from "./Request";
import { useState } from "react";

const TaskCard = function (props) {
    const [important, setImportant] = useState(props.task.important);
    const [finished, setFinished] = useState(props.task.finished);
    const [text, setText] = useState("");

    const onChange = async function (e, label) {
        let data = {
            name: props.task.name,
            finished: props.task.finished,
            important: props.task.important,
            List: props.task.List,
        };

        if (label === "finished") {
            setFinished(!finished);
            data[label] = !finished;
        } else {
            setImportant(!important);
            data[label] = !important;
        }

        const res = await putRequest("/task/" + props.task.id, data);
        await props.listTasks();
    };

    const onDelete = async function (e) {
        const res = await deleteRequest("/task/" + props.task.id);
        await props.listTasks();
    };

    const handleChange = function (e) {
        setText(e.target.value);
    };

    const handleUpdate = async function (e) {
        let data = {
            name: text,
            finished: props.task.finished,
            important: props.task.important,
            List: props.task.List,
        };
        const res = await putRequest("/task/" + props.task.id, data);
        await props.listTasks();
    };

    return (
        <div className="input-group">
            <div
                className="input-group-text"
                onClick={(e) => onChange(e, "finished")}
            >
                {finished ? (
                    <i className="bi bi-circle-fill"></i>
                ) : (
                    <i className="bi bi-circle"></i>
                )}
            </div>
            <input
                type="text"
                className={
                    finished
                        ? "form-control text-decoration-line-through"
                        : "form-control"
                }
                defaultValue={props.task.name}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleUpdate(e)}
            />
            <div
                className="input-group-text"
                onClick={(e) => onChange(e, "important")}
            >
                {important ? (
                    <i className="bi bi-star-fill"></i>
                ) : (
                    <i className="bi bi-star"></i>
                )}
            </div>
            <div className="input-group-text" onClick={(e) => onDelete(e)}>
                <i className="bi bi-trash3"></i>
            </div>
        </div>
    );
};

export default TaskCard;
