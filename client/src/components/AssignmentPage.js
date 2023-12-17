import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AssignmentModal from "./AssignmentModal";
import AssignmentList from "./AssignmentList";
import "./assignmentpage.css"

function Assignment() {
  const [taskId, setTaskId] = useState();
  const [task, setTask] = useState([]);
  const { id } = useParams();
  const [openAssignModal, setOpenAssignModal] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`http://localhost:5000/submit_task/${id}`);
        if (response.ok) {
          let data = await response.json();
          console.log("data: ", data);
          if (!data.photo) {
            data = { ...data, photo: "https://placekitten.com/200/200" };
            setTask({ ...data });
          } else {
            setTask({ ...data });
          }
        } else {
          console.error("Failed Task");
        }
      } catch (error) {
        console.error(error);
      }
    };
    setTaskId(id);
    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/submit_task/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      alert("Task Deleted! ");
      navigate("/task");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const refreshTasks = async () => {
    try {
      const response = await fetch(`http://localhost:5000/submit_task/${id}`);
      if (response.ok) {
        const data = await response.json();
        setTask(data);
      } else {
        console.error("Failed to fetch tasks");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [assignmentArray, setAssignmentArray] = useState([]);

  const fetchAssignments = useCallback(async () => {
    const response = await fetch(
      `http://localhost:5000/submit_assignment/by-taskId/${id}`
    );
    const data = await response.json();
    setAssignmentArray(data);
  }, [id]);

  useEffect(() => {
    fetchAssignments();
  }, [fetchAssignments]);

  const navigate = useNavigate();
  return (
    <div>
      <div className="banner-container">
        <img className="banner-image" src={task?.photo} alt={`${task?.name}`} />
        <div className="banner-text">
          <h1>{task?.name}&nbsp;</h1>
        </div>
      </div>
      <AssignmentList assignmentArray={assignmentArray} fetchAssignments={fetchAssignments} />
      <AssignmentModal
        open={openAssignModal}
        onClose={() => setOpenAssignModal(false)}
        onTaskAdded={refreshTasks}
        id={id}
        fetchAssignments={fetchAssignments}
      />
      <button className="addTask" onClick={() => setOpenAssignModal(true)}>
        Create Assignment
      </button>
      <input className="addTask" type="submit" value="Delete Collection" onClick={() => handleDelete()} />
    </div>
  );
}

export default Assignment;
