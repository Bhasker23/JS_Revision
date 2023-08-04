import React, { useState } from "react";

function Notes() {
  let [notes, setNotes] = useState([]);
  let [curNote, setCurNotes] = useState("");
  // let [car, setCar] = useState({
  //   model: "Innova",
  //   year: 2018,
  //   color: "black",
  // });

  function updateCurNotes(event) {
    setCurNotes(event.target.value);
  }

  function addNote(event) {
    let newNotesArray = [...notes, curNote];
    setNotes(newNotesArray);
  }
  return (
    <>
      <input onChange={updateCurNotes} type="text" />
      <button onClick={addNote}>Submit</button>
      <ul>
        {notes.map((note, index) => {
          return <li key={index}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default Notes;
