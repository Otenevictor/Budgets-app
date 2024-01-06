// import React from 'react'
// import { TodoWrapper } from "../component/TodoList/ToDoWrapper"
import Navbar from "../component/NavBar";
import { useState, useEffect } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editInputValue, setEditInputValue] = useState("");
  const [componentMounted, setComponentMounted] = useState(false);

  //  load items from local storage on component mount
  useEffect(() => {
    setComponentMounted(true);
    try {
      const storedItems = JSON.parse(localStorage.getItem("myLocalList")) || [];
      setItems(storedItems);
    } catch (error) {
      console.error("Error loading item from localStorage:", error);
    }
  }, []);
  // empty dependency array means this effect runs once after the initial render

  // save items to local storage whenever items change
  useEffect(() => {
    if (componentMounted) {
      try {
        localStorage.setItem("myLocalList", JSON.stringify(items));
      } catch (error) {
        console.error("Error saving item to localStorage:", error);
      }
    }
  }, [items, componentMounted]);

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditInputValue(items[index]);
  };

  const handleDelete = (index) => {
    // Display a confirmation alert before deleting
    const shouldDelete = window.confirm(
      `Are you sure you want to delete ${items[index]}?`
    );
    if (shouldDelete) {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
      setEditIndex(null);

      // if the deleted item is being edited, reset the edicting state
      if (index === editIndex) {
        setEditIndex(null);
        setEditInputValue("");
      }
    }
  };

  const handleSaveEdit = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = editInputValue;
    setItems(updatedItems);
    setEditIndex(null);
    setEditInputValue("");
  };

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
      console.log(items);
    }
  };

  // const handleToggleComplete = (index) => {
  //   const updatedItems = [...items];
  //   updatedItems[index] = {
  //     ...items[index],
  //     completed: !items[index].completed,
  //   };
  //   setItems(updatedItems);
  // };

  const getColorForIndex = (index) => {
    const colors = ["red", "blue", "purple", "yellow", "green"];
    return colors[index % colors.length];
    // run true all colour for each items
  };
  return (
    <>
      <Navbar />

      <div className="d-flex justify-content-center align-item-center">
        <h1>Todo List</h1>
        <input
          className="p-1  border-primary px-2"
          type="text"
          placeholder="add a list"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn bg-primary text-white" onClick={handleClick}>
          Add
        </button>
        {/* <p>{items}</p> */}
        <ul>
          {items.map((items, index) => (
            <li key={index} className={items.completed ? 'completed' : ''} style={{ color: getColorForIndex(index) }}>
              {index === editIndex ? (
                <>
                  <input
                    type="text"
                    value={editInputValue}
                    onChange={(e) => setEditInputValue(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(index)}>
                    save edit
                  </button>
                </>
              ) : (
                <>
                {/* {items} */}
                  {/* <span onClick={() => handleToggleComplete(index)} style={{ textDecoration : items.completed ? 'line-through' : 'none'}}> */}
                    {items}
                  {/* </span> */}
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
        {/* <TodoWrapper/> */}
      </div>
    </>
  );
};

export default TodoList;
