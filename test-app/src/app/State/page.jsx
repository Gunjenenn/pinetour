"use client";
import { useState } from "react";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState([]);
  const [dlt, setDlt] = useState();
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addShow = () => {
    const newShow = {
      id: Date.now(),
      value: inputValue,
      isDone: false,
    };
    setShow([...show, newShow]);
  };

  const deleteBtn = (id) => {
    setShow(show.filter((aaa, index) => aaa.id !== id));
  };
  const doneBtn = (id) => {
    const newTodo = show.map((bbb, index) => {
      return bbb.id === id ? { ...bbb, isDone: true } : bbb;
    });

    setShow(newTodo)
  };

  console.log(show);
  return (
    <div>
      <input
        placeholder="type here"
        onChange={handleInputValue}
        value={inputValue}
      />
      <button onClick={addShow}>show</button>
      <div>
        {show.map((input, index) => {
          return (
            <div key={index} style={{ display: "flex", gap: "5px"}} >
              <button onClick={() => doneBtn(input.id)}>done</button>
              <div key={index} style={{backgroundColor : input.isDone ? "pink" : "inherit"}}>{input.value} </div>
              <button onClick={() => deleteBtn(input.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
