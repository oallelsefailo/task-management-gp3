import React from "react";

const AssignmentList = (props) => {
  const { assignmentArray, fetchAssignments } = {...props}; 

  async function updateChecked(event, iterator) {
    const response = await fetch(
      `http://localhost:5000/submit_assignment/by-id`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...iterator,
          checked: event.target.checked,
        }),
      }
    );
    console.log("response", response);
    fetchAssignments();
  }

  return (
    <>
      {assignmentArray.map((iterator, index) => {
        const checked = iterator?.checked ? true : false;

        let isChecked = !checked ? (
          <>
            Assignment:&nbsp; 
             <b>{iterator?.assignment}</b>, Assignee: <i>{iterator?.assignee}</i>
          </>
        ) : (
          <s style={{color: "red"}}>
            Assignment:&nbsp;
             <b>{iterator?.assignment}</b>, Assignee: <i>{iterator?.assignee}</i>
          </s>
        );

        return (
          <div key={index}>
            <hr />
            <input
              type="checkbox"
              checked={checked}
              onChange={(event) => updateChecked(event, iterator)}
            ></input>
            {isChecked}
          </div>
        );
      })}
    </>
  );
};

export default AssignmentList;
