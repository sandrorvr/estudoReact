import React from "react";
import './Box.css'


function Box({ children }) {
    return (
        <div className="box box-right">
            {children}
        </div>
    );
}

export default Box;