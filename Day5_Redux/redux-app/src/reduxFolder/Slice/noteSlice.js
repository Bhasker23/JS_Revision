import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "noteSlice",
  initialState: {
    notes: [],
  },
  reducers: {
    createNotes: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      console.log("object");
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export default notesSlice.reducer;

export const { createNotes, deleteNote } = notesSlice.actions;
