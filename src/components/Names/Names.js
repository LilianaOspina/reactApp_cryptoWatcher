import React from "react";

const Names = ({ title, fullname }) => {
    return <div>
        <h3>{title}</h3>
        <p>{ fullname }</p>
        </div>;
};

export default Names;
