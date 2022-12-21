import { useState } from "react";
import { postRequest } from "../Components/Request";

const NewList = function (props) {
    const [name, setName] = useState("")

    const handleClick = function(e){
        
    }

    const handleChange = function(e){
        setName(e.target.value)
    }

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Set list name"
                onChange={(e) => handleChange(e)}
            />
            <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={(e) => handleClick(e)}
            >
                Add
            </button>
        </div>
    );
};

export default NewList;
