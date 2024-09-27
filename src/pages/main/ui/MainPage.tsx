import { Container, Text } from '~/shared';
import styles from './MainPage.module.scss';
import { AddTask, TaskList } from '~/features/task';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export function MainPage() {
    return (
        <Container className={styles.page}>
            <Text as="h1">TODO list</Text>
            <div className={styles.content}>
                <AddTask />
                <DndProvider backend={HTML5Backend}>
                    <TaskList />
                </DndProvider>
            </div>
        </Container>
    );
}
