import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./modal.css";

function Modal({ open, onClose }) {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const refresh = () => window.location.reload(true);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submit_task", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          photo,
          name,
        }),
      });

      if (response.ok) {
        console.log("Task Posted Successfully");
        setPhoto("");
        setName("");
        navigate("/task");
        onClose();
        refresh();
      } else {
        console.error("Failed to post task");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="modal-container">
      <div className="modal-content">
        <p className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </p>
        <h1>Submit Task</h1>
        <form method="POST" action="/task">
          <div>
            <label>Image: </label>
            <input
              id="photos"
              name="photos"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div>
            <label>Name: </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength="30"
              required
            />
          </div>
          <input
            type="submit"
            value="Submit Query"
            className="addTask"
            onClick={handleSubmit}
            refresh="true"
          />
        </form>
      </div>
    </div>
  );
}

export default Modal;
