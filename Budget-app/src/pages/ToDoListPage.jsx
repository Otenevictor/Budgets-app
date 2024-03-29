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
    alert("task edited");
  };

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
      console.log(items);
    } else {
      alert("input can't be empty");
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
    const colors = ["red", "blue", "purple", "black", "green", "orange"];
    return colors[index % colors.length];
    // run true all colour for each items
  };
  return (
    <>
      <Navbar />

      <div className=" container-fluid mt-5 d-flex flex-column justify-content-center align-item-center">
        <h1 className="text-center">Todo List</h1>
        <div className=" container d-flex  justify-content-center align-item-center">
          <div className="">
            <input
              className="p-2  border-primary remove_blue_boder todo_add_button"
              type="text"
              placeholder="add a task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <button className="btn bg-primary todo_add_button rounded-start-0 text-white" onClick={handleClick}>
            Add
          </button>
        </div>
        {/* <p>{items}</p> */}
        <ul className="list-group m-4 bg-dark">
          {items.map((items, index) => (
            <li
              key={index}
              className={`list-group-item ${
                items.completed ? "completed" : ""
              }`}
              style={{ color: getColorForIndex(index) }}
            >
              {index === editIndex ? (
                <>
                  <input
                    className="form-control remove_blue_boder " style={{ color: getColorForIndex(index) }}
                    type="text"
                    value={editInputValue}
                    onChange={(e) => setEditInputValue(e.target.value)}
                  />
                  <div className="d-flex flex-row  m-2 justify-content-end">
                  <button
                    className="btn btn-success d-flex flex-row  m-2 justify-content-end"
                    onClick={() => handleSaveEdit(index)}
                  >
                    save edit
                  </button>
                  </div>
                </>
              ) : (
                <>
                  {/* {items} */}
                  {/* <span onClick={() => handleToggleComplete(index)} style={{ textDecoration : items.completed ? 'line-through' : 'none'}}> */}
                  {items}
                  {/* </span> */}
                  <span className="d-flex flex-row justify-content-end ">
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => handleEditClick(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      delete
                    </button>
                  </span>
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
