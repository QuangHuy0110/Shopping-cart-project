import React from "react";
import "./toast.css";
const Toast = (props) => {
  if (props.visible === null) {
    return null;
  }
  return (
    <div
      id="toastItem"
      className={`alert alert-${props.visible ? "success" : "danger"}`}
    >
      {props.visible ? "Add success" : "Item already in cart"}
    </div>
  );
};

export default Toast;
