import TaskCard from "./TaskCard";
import NewTask from "./NewTask";

const TaskBody = function (props) {
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
