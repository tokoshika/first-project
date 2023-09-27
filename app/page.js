"use client";
import "./style.css";
import React, { useState } from "react";
import Button from "./button/page.js";
import Link from "next/link";
import Select from "./select/page.js";

const App = () => {
  // useStateを使ったトグルボタン
  const [active, setActive] = useState(false);
  const [ok, notok] = useState(false);

  const classToggle = () => {
    setActive(!active);
    console.log(active);
  };

  const okToggle = () => {
    notok(!ok);
    console.log(ok);
  };

  return (
    <>
      <div className="header">
        <Link href="Input" className="no-underline ">
          INPUT
        </Link>
      </div>

      <button onClick={classToggle}>classNameをつけたり外したりする</button>
      <h1 className={active ? "red" : "white"}>Hello World</h1>
      <button onClick={okToggle}>OK</button>
      <br></br>
      <div className="button-area">
        <Button />
        <Select />
      </div>
    </>
  );
};
export default App;
