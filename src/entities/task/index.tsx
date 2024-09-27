export { type Task } from './model/types';
export { TaskItem } from './ui/TaslItem/TaskItem';
export { DraggleTaskItem } from './ui/DraggleTaskItem/DraggleTaskItem';
export { default as taskReducer } from './model/taskSlice';
export {
    addTask,
    toggleTask,
    editTask,
    deleteTask,
    moveTask,
} from './model/taskSlice';
