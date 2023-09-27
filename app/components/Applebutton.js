import "./Applebutton.css";
import { useState } from "react";

const Applebutton = () => {
  const [visible, setVisible] = useState(false);
  const push = () => {
    setVisible(!visible);
  };
  return (
    <>
      <h1 className="apple-button">Apple Button.js</h1>
      <button onClick={push}>Push Me</button>
      {visible ? "ok" : ""}
      <input text></input>
    </>
  );
};

export default Applebutton;
