import { useState } from "react";
import "./Button.css";

const Button = ({ props = "button", color = "black", name }) => {
  const [visible, setVisible] = useState(false);
  const btnClick = () => {
    setVisible(!visible);
    console.log(visible);
  };
  return (
    <>
      <button className={`button ${color}`} onClick={btnClick}>
        {props}
      </button>
      <div>{visible ? name : ""}</div>
    </>
  );
};

export default Button;
