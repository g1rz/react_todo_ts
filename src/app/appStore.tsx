import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { taskReducer } from '~/entities/task';
import { localStorageMiddleware } from '~/shared';

const preloadedState = {
    tasks: {
        tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    },
};

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
