import SidebarCard from "../Components/SidebarCard";
import "../CSS/Sidebar.css";
import { useState, useEffect } from "react";
import { postRequest } from "../Components/Request";
import { useNavigate } from "react-router-dom";

const Sidebar = function (props) {
    const [lists, setList] = useState([]);
    const navigate = useNavigate()

    const setListBySideBar = function (lists) {
        props.setListParent(lists);
    };

    const logout = async function(e){
        const res = await postRequest("/logout/",{})
        localStorage.removeItem("user");
        navigate("/login")
    }

    return (
        <header id="sidebar">
            <nav
                id="sidebarMenu"
                className="collapse d-lg-block sidebar collapse bg-white"
            >

                <i className="bi bi-box-arrow-left" id="logout" onClick={e => logout(e)}></i>

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
                        {props.lists.map((list, i) => {
                            return (
                                <SidebarCard
                                    label={list.name}
                                    type="list"
                                    setListParent={setListBySideBar}
                                    list={list}
                                    key={list.id}
                                />
                            );
                        })}
                    </div>

                    <div className="list-group list-group-flush mx-3 mt-5">
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
