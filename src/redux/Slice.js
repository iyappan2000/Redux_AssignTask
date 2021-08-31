import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const addTaskAsync = createAsyncThunk(
  "tasks/addTaskAsync",
  async (payload) => {
    const resp = await fetch(
      "https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b?company_id=company_b841ec73bbde4de5918b19ac93bf2d56",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzAzOTc0MzgsIm5iZiI6MTYzMDM5NzQzOCwianRpIjoiODkxZWExNTItYTNkNS00NjFiLWFjYmMtMWI4OTEwOTA4NjlkIiwiaWRlbnRpdHkiOnsibmFtZSI6Ik1haGkgQ1NLIiwiZW1haWwiOiJnb29kQHRlc3QzLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzQxYzFkNDg1NjRhODQzNWQ4MTU2NDM5OTZkOWEzODhmIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mZDE3ZDIwNjUwYzk5NTk0YWVmNmQxMjVhMjU5ODdlYT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.a-HPWE_ISJJA2H880_LiCu7H8rUkqjXVeeweRomWw2k",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: payload.user.id,
          icon: payload.icon,
          taskName: payload.title,
          Dates: payload.date,
        }),
      }
    );

    if (resp.ok) {
      const task = await resp.json();
      return { task };
    }
  }
);
export const deleteTaskSync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    const resp = await fetch(
      "https://stage.api.sloovi.com/task/lead_c1de2c7b9ab94cb9abad131b7294cd8b/<task_id>?company_id=company_b841ec73bbde4de5918b19ac93bf2d56",
      {
        method: "DELETE",
      }
    );

    if (resp.ok) {
      return { id: payload.id };
    }
  }
);
const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const tasks = {
        id: nanoid,
        title: action.payload.title,
        date: action.payload.date,
      };
      state.push(tasks);
    },
    UpdateTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            title: action.payload.title,
            date: action.payload.date,
          };
        }
        return task;
      });
    },
    OpenEditTask: (state, action) => {
      return {
        ...state,
        uiState: {
          ...state.uiState,
          setVisible: true,
          EditTask: action.payload,
        },
      };
    },
    CloseEditTask: (state, action) => {
      return {
        ...state,
        uiState: {
          ...state.uiState,
          setVisible: false,
        },
      };
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
  extraReducers: {
    [addTaskAsync.fulfilled]: (state, action) => {
      state.push(action.payload.task);
    },

    [deleteTaskSync.fulfilled]: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addTask, UpdateTask, deleteTask, OpenEditTask, CloseEditTask } =
  taskSlice.actions;

export default taskSlice.reducer;
