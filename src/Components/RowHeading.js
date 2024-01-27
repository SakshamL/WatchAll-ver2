import React from "react";
import "./RowHeading.css";
import EastIcon from "@mui/icons-material/East";

const RowHeading = (props) => {
  return (
    <>
      <div className="rowheading">
        <div className="rowheading-container">
          <h3 className="title">{props.title}</h3>
          {/* <hr></hr> */}
          <h3 className="view-all">
            View All <EastIcon className="rightarrow" />
          </h3>
        </div>
      </div>
    </>
  );
};

export default RowHeading;
