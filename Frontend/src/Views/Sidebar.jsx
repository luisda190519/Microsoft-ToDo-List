import SidebarCard from "../Components/SidebarCard";
import "../CSS/Sidebar.css";

const Sidebar = function (props) {
    
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
                        <SidebarCard label="Importante" type="star" link="/important" />
                        <SidebarCard label="Luis" type="list" link="/a"/>
                        <SidebarCard label="Luis" type="list" link="/b"/>
                    </div>

                    <div
                        className="list-group list-group-flush mx-3"
                        style={{ marginTop: "175%" }}
                    >
                        <SidebarCard label="New List" type="add" links="/"/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Sidebar;
