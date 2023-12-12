import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./container.css";

function Container() {
  const [task, setTasks] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch("http://localhost:5000/submit_task");
        if (response.ok) {
          const data = await response.json();
          const taskWithPlaceholders = data.map((task) => {
            if (!task.photo) {
              return { ...task, photo: "https://placekitten.com/200/200" };
            }
            return task;
          });
          setTasks(taskWithPlaceholders);
        } else {
          console.error("Failed to fetch task");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTask();
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h2>Evil Plans Projects</h2>
        <div className="buttons">
          <button>
            <FontAwesomeIcon icon={faFlipboard} /> &nbsp; Boards
          </button>
          <button>
            <FontAwesomeIcon icon={faBinoculars} />
            &nbsp; Views
          </button>
          <button>
            <FontAwesomeIcon icon={faPerson} /> &nbsp; Members
          </button>
        </div>
      </div>
      <div className="task">
        <h3>task:</h3>
        <ul>
          {task.map((task) => (
            <li key={task._id}>
              <img src={task.photo} alt={`${task.name}`} />
              <p>{task.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/task/submit">
        <button className="">Add Task</button>
      </Link>
    </div>
  );
}

export default Container;
