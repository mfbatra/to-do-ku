import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchAllTodos } from "../api/todo-service";

//async thunk based actions
export const fetchTodoList = createAsyncThunk("todo/fetch", async () => {
  const response = await fetchAllTodos();
  return response.data.sort((a, b) => b.id - a.id);
});
export const addTodoListItem = createAsyncThunk("todo/add", async (data) => {
  // here we can have api call to add
  // the current api is just returning success only.
  return {
    title: data,
    completed: false,
  };
});

const initialState = { apiData: [], loading: false };

const todoSlice = createSlice({
  name: "todoApiData",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
  }, // reducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoList.fulfilled, (state, action) => {
        state.loading = false;
        state.apiData = action.payload;
      })
      .addCase(fetchTodoList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodoList.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addTodoListItem.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.apiData = [payload, ...state.apiData];
      })
      .addCase(addTodoListItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTodoListItem.rejected, (state) => {
        state.loading = false;
      });
  },
});

// export const {} = todoSlice.actions;
export default todoSlice.reducer;
