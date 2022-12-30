import React from "react";

const FromInput = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        data-testid={props.dataTestid}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        {...props.register}
      />
    </>
  );
};

export default FromInput;
