import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./modal.css"

function AssignmentModal({ open, onClose, onTaskAdded, id, fetchAssignments }) {
  const [assignment, setAssignment] = useState("");
  const [assignee, setAssignee] = useState("");

  console.log("task id", id);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/submit_assignment`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assignment,
          assignee,
          taskId: id,
          checked: false,
        }),
      });

      if (response.ok) {
        console.log("Task Posted Successfully");
        setAssignment("");
        setAssignee("");
        onClose();
        onTaskAdded();
        fetchAssignments();
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
      <p onClick={onClose} className="close-button">
        <FontAwesomeIcon icon={faTimes} />
      </p>
      <h1>Submit Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Assignment: </label>
          <input
            id="assignment"
            name="assignment"
            value={assignment}
            onChange={(e) => setAssignment(e.target.value)}
          />
        </div>
        <div>
          <label>Assignee: </label>
          <input
            id="assignee"
            name="assignee"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Submit Query" className="addTask" onClick={handleSubmit} />
      </form>
      </div>
    </div>
  );
}

export default AssignmentModal;
