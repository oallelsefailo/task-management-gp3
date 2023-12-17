import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./container.css";
import Modal from "./Modal";

function Container() {
  const [task, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  
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
        <img src="/assets/images/icons/em-logo.png" alt="Evil Monday Logo" />
        <div className="buttons">
          <Link to="/task">
            <button>
              <FontAwesomeIcon icon={faFlipboard} /> &nbsp; Boards
            </button>
          </Link>
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
        <h3>Task:</h3>
        <ul>
          {task.map((task) => (
            <li key={task._id}>
              <Link to={`/task/${task._id}`} className="navLink">
              <div className="task-content">
                <img src={task.photo} alt={`${task.name}`} />
                <p>{task.name}</p>
              </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="addTask" onClick={() => setOpenModal(true)}>
        Add Task
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default Container;