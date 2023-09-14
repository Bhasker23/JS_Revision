import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./Slice/MessageSlice";
import noteSlice from "./Slice/noteSlice";

export default configureStore({
  reducer: {
    // one way of writing reducer because in this key and value both written as messageReducer
    messageReducer,
    // Second way of writing reducer in this key name is different and value name is different , we can write
    // both as same name and then remove the value.
    notesReducer: noteSlice,
  },
});
