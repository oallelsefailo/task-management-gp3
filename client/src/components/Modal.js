import React from "react";
import "./modal.css";

const Modal = ({ open, onClose }) => {
    if (!open) return null
    return (
        <div className="overlay">
            <div className="modalContainer">
                <div className="modalRight">
                    <p onClick={onClose} className="closeBtn">X</p>
                    <div>
                        <h1>TASK</h1>
                        <label for="photo">Photo:</label>
                        <input type="text" id="photo" name="photo"></input>
                        <label for="name">Task Name:</label>
                        <input type="text" id="name" name="name"></input>
                        <div className="btnContainer">
                            <button className="btnPrimary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;