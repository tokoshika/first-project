"use client";
import { useState } from "react";
import Test from "../components/Test";
import Apple from "../components/Apple";

const Button = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>チェンジ</button>
      {visible ? <Test /> : <Apple />}
    </>
  );
};

export default Button;
