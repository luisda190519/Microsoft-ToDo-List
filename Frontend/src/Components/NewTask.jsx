import { useState } from "react";
import { postRequest } from "./Request";

const NewTask = function (props) {
    const [Text, setText] = useState("")

    const handleChange = function(e){
        setText(e.target.value)
    }

    const handleClick = async function(e){
        let data = {
            name: Text,
            finished: false,
            important: false,
            List: props.list
        }
        const res = await postRequest("/tasks/" + props.list, data)
    }

    return (
        <div className="input-group">
            <div className="input-group-text" onClick={(e) => handleClick(e)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    />
                </svg>
            </div>
            <input type="text" placeholder="Add new task" className="form-control" onChange={(e) => handleChange(e)}/>
        </div>
    );
};

export default NewTask;
