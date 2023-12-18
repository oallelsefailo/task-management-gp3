import React from "react";
import "./container.css"; 
import "./members.css";

function Members() {
  const members = [
    { name: "Brandon", title: "Git Guardian of the Underworld" },
    { name: "Steven", title: "Shadow Debugger" },
    { name: "Jose", title: "Sovereign of Syntax Errors" },
    { name: "Manny", title: "Infinite Loop Warlock" },
  ];

  return (
    <div className="container">
      <div className="title">Members:</div>
      <div className="members-content">
        {members.map((member, index) => (
          <div key={index}>
            {member.name} - <span className="member-title">{member.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Members;
