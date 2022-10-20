import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState:{
    todos: [],
  },
  reducers:{
    addTodo(state, action){
      state.todos.push({
        id: `${Math.random() * 100}${Date.now()}`,
        content: action.payload.text,
        status: false,
      })

    },
    deleteTodo(state, action){
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    changeStatus(state, action){
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
      toggledTodo.status = !toggledTodo.status;
    },
  }
})

export const {addTodo, deleteTodo, changeStatus} = todoSlice.actions;

export default todoSlice.reducer;