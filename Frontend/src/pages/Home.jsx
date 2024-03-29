import { useState, useEffect } from "react";

//Components
import Sidebar from "../Views/Sidebar";
import TaskBody from "../Views/TaskBody";
import NewList from "../Views/NewList";
import { getRequest } from "../Components/Request";

//Css
import "../CSS/TaskBody.css";

const Home = function (props) {
    const [list, setList] = useState({ name: "Important" });
    const [lists, setLists] = useState([]);

    const getLists = async function () {
        try {
            const data = await getRequest("/lists/" + props.userID);
            setLists(data);
        } catch (error) {
            console.log(error);
        }
    };

    const setListBySideBar = function (list) {
        setList(list);
        getLists();
    };

    useEffect(() => {
        getLists();
    }, []);

    return (
        <div>
            <Sidebar setListParent={setListBySideBar} lists={lists} />
            <div className="container w-75" id="taskbody">
                {list ? (
                    <TaskBody list={list} setListParent={setListBySideBar} userID={props.userID}/>
                ) : (
                    <NewList
                        getLists={getLists}
                        setListParent={setListBySideBar}
                        userID={props.userID}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
