import SidebarCard from "../Components/SidebarCard";
import "../CSS/Sidebar.css";
import { useState } from "react";
import useFetch from "react-fetch-hook";

const Sidebar = function (props) {
    const [list, setList] = useState(1);
    const { isLoading, data, error } = useFetch("http://localhost:3000/lists");
    let listCards = null;

    const setListBySideBar = function (list) {
        setList(list);
        props.setListParent(list);
    };

    if (error) {
        return (
            <div>
                <p>Code: ${error.status}</p>
                <p>Message: ${error.statusText}</p>
            </div>
        );
    }

    if (!isLoading) {
        listCards = data.map((list, i) => {
            return (
                <SidebarCard
                    label={list.name}
                    type="list"
                    setListParent={setListBySideBar}
                    list={list}
                    key={i}
                />
            );
        });
    }

    return (
        <header id="sidebar">
            <nav
                id="sidebarMenu"
                className="collapse d-lg-block sidebar collapse bg-white"
            >
                <div className="container mx-2 my-1">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Samsung_Galaxy_Logo.png"
                        style={{ height: "75px" }}
                        alt=""
                    />
                </div>

                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <SidebarCard
                            label="Important"
                            type="star"
                            setListParent={setListBySideBar}
                            list={{ id: "important", name: "Important" }}
                        />
                        {listCards}
                    </div>

                    <div
                        className="list-group list-group-flush mx-3"
                        style={{ marginTop: "175%" }}
                    >
                        <SidebarCard
                            label="New List"
                            type="add"
                            setListParent={setListBySideBar}
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Sidebar;
