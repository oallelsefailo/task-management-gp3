import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./container.css";

function Container() {
  const [task, settask] = useState([]);

  useEffect(() => {
    const fetchtask = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/task"
        );
        if (response.status === 200) {
          const taskWithPlaceholders = response.data.map(
            (task) => {
              if (!task.photo) {
                return {
                  ...task,
                  photo: "https://placekitten.com/200/200",
                };
              }
              return task;
            }
          );
          settask(taskWithPlaceholders);
        } else {
          console.error("Failed to fetch task");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchtask();
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
    </div>
  );
}

export default Container;
