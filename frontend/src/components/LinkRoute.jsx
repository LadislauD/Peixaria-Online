import React from "react";

const LinkRoute = ({ route, styleLink, content }) => {
    return (
        <a href={route}
            style={{ textDecoration: "none" }}
            className={styleLink}>
            {content}
        </a>
    );
}
export default LinkRoute;