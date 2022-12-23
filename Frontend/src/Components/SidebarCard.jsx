import { useState } from "react";

const SidebarCard = function (props) {
    let cardImage = null;
    const [list, setList] = useState(1);

    switch (props.type) {
        case "add":
            cardImage = <i class="bi bi-plus-lg"></i>;
            break;
        case "list":
            cardImage = <i class="bi bi-list-check"></i>;
            break;
        case "star":
            cardImage = <i class="bi bi-star"></i>;
            break;
    }

    const handleClick = function (e) {
        setList(props.list);
        props.setListParent(props.list);
    };

    return (
        <a
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
            onClick={(e) => handleClick(e)}
        >
            {cardImage}
            <i className="me-3"></i>
            <span> {props.label}</span>
        </a>
    );
};

export default SidebarCard;
