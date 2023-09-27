"use client";
import "./Select.css";
import Button from "../components/Button/Button";
import Test1 from "../components/Button/Test/Test1";
import Test2 from "../components/Button/Test/Test2";
import Test3 from "../components/Button/Test/Test3";
import Test4 from "../components/Button/Test/Test4";
import Test5 from "../components/Button/Test/Test5";

// ボタン装飾、props=ボタンの名前、color=ボタンの背景色

const Select = () => {
  return (
    <>
      <Button props="Button1" color="red" name={<Test1 />} />

      <Button props="Button2" color="purple" name={<Test2 />} />

      <Button props="Button3" color="skyblue" name={<Test3 />} />

      <Button props="Button4" color="green" name={<Test4 />} />

      <Button props="Button4" name={<Test5 />} />
    </>
  );
};

export default Select;
