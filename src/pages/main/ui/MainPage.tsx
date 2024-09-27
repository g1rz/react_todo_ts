import { Container, Text } from '~/shared';
import styles from './MainPage.module.scss';
import { AddTask, TaskList } from '~/features/task';

export function MainPage() {
    return (
        <Container className={styles.page}>
            <Text as="h1">TODO list</Text>
            <div className={styles.content}>
                <AddTask />
                <TaskList />
            </div>
        </Container>
    );
}
