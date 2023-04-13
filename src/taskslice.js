import { createSlice } from "@reduxjs/toolkit";


const initialState = {      //initial state create 
    tasksList: [],  //all datas store
    selectedTask:{}  //table datas inga update kudkum podhu update form la show panrathuku

}


const tasksSlice = createSlice({
  name: "tasksSlice", //slice name
  initialState,
  reducers: {
    addTaskToList: (state, action) => {
      const id = Math.random() * 100; //nammala oru create panram
      let task = { ...action.payload, id }; //...action ithula namma kudukara datas varum payload na {id:1, name:'gokul'}

      state.tasksList.push(task);
    },
    removeTaskFromList: (state, action) => {
      state.tasksList = state.tasksList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    updateTaskList: (state, action) => {
      state.tasksList = state.tasksList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;   //upadation form ku data va kondu porathukku
    },
  },
});

export const { addTaskToList, removeTaskFromList, updateTaskList, setSelectedTask } =
  tasksSlice.actions;

export default tasksSlice.reducer