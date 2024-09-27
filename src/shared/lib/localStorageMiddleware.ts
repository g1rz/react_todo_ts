import { Middleware } from 'redux';

export const localStorageMiddleware: Middleware =
    (store) => (next) => (action) => {
        const result = next(action);
        const state = store.getState() as RootState;
        localStorage.setItem('tasks', JSON.stringify(state.tasks.tasks));
        return result;
    };
