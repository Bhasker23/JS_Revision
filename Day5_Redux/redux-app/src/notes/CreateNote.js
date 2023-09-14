import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNotes } from "../reduxFolder/Slice/noteSlice";
import { nanoid } from "@reduxjs/toolkit";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [desc, setDescription] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      createNotes({
        title,
        desc,
        id: nanoid(5),
      })
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description here"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default CreateNote;
