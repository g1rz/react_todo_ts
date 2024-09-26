import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from './types';

type TaskState = {
    tasks: Task[];
};

const initialState: TaskState = {
    tasks: [],
};

export const taskSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            state.tasks.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        toggleTask: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload,
            );
        },
    },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
