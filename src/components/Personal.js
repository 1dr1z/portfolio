import React from "react";

function Personal(props) {
  return (
    <React.Fragment>      
        <li className="personal-list-item"><i className="fas fa-chevron-circle-right"></i>{props.item.desc}</li>
    </React.Fragment>
  );
}

export default Personal;
