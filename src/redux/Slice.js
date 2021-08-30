import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [
    {
      id: 1,
      title: "Follow Up",
      date: "14/02/2021",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const task = {
        id: Date.now(),
        title: action.payload.title,
        date: action.payload.date,
      };
      state.push(task);
    },
  },
});

export const { addTodo } = taskSlice.actions;

export default taskSlice.reducer;
