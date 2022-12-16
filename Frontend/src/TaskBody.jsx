import TaskCard from "./TaskCard";
import NewTask from "./NewTask";

const TaskBody = function (props) {

    const getListData = async function(){
        const result = await fetch("https://todolist-backend.luisda1905.repl.co/tasks/")
        .then((data) =>{
            return data.json()
        })
        .catch((err) =>{
            return false
        })       
    }

    console.log(getListData());

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
