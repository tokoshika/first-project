"use client";
import Link from "next/link";
import "../style.css";
import { useState } from "react";

const Input = () => {
  const [val, setVal] = useState("");
  const [text, setText] = useState("false");
  const clearVal = () => {
    if (val === "a") {
      console.log("ok");
      setText(!text);
    } else {
      console.log("no");
    }
    console.log(val);
    setVal("");
  };

  return (
    <>
      <div className="header">
        <Link href="/" className="no-underline">
          HOME
        </Link>
      </div>

      <div>
        <div>
          <input
            id="input"
            placeholder="こんにちは"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <button onClick={clearVal}>クリア</button>
        <div>{text ? val : ""}</div>
      </div>
    </>
  );
};

export default Input;
