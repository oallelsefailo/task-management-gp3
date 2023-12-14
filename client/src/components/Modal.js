import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Modal({ open, onClose }) {
   
    const navigate = useNavigate();
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const refresh = () => window.location.reload(true)
    
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
                navigate('/task');
                onClose();
                refresh();
            } else {
                console.error("Failed to post task");
            }
        } catch (error) {
            console.error(error);
        }
        
    }
    return (
        <div className="submit-container">
        <p onClick={onClose} className="closeBtn">X</p>
          <h1>Submit Task</h1>
          <form method="POST" action="/task">
            <div className="label-input-group">
              <label>Photos: </label>
              <input
                id="photos"
                name="photos"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
            <div className="label-input-group">
              <label>Name: </label>
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <input type="submit" value="Submit Query" onClick={handleSubmit} refresh="true"/>
          </form>
        </div>
      );
}

export default Modal;