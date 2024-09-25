import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import { MainPage } from '~/pages/main';
import { store } from './appStore';

import '~/shared/styles/index.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ReduxProvider store={store}>
            <MainPage />
        </ReduxProvider>
    </StrictMode>,
);
