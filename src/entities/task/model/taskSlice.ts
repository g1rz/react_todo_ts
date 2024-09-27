import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from './types';

type TaskState = {
    tasks: Task[];
};

type EditTask = {
    id: number;
    text: string;
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
        editTask: (state, action: PayloadAction<EditTask>) => {
            const { id, text } = action.payload;
            const task = state.tasks.find((task) => task.id === id);

            if (!task) {
                return;
            }
            task.text = text;
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload,
            );
        },
        moveTask(
            state,
            action: PayloadAction<{ dragIndex: number; hoverIndex: number }>,
        ) {
            const { dragIndex, hoverIndex } = action.payload;
            const dragTask = state.tasks[dragIndex];
            state.tasks.splice(dragIndex, 1);
            state.tasks.splice(hoverIndex, 0, dragTask);
        },
    },
});

export const { addTask, toggleTask, editTask, deleteTask, moveTask } =
    taskSlice.actions;
export default taskSlice.reducer;
