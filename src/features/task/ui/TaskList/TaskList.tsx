import { useSelector } from 'react-redux';
import styles from './TaskList.module.scss';
import { TaskItem } from '~/entities/task';
import { useEffect } from 'react';

export function TaskList() {
    const taskList = useSelector((state: RootState) => state.tasks.tasks);

    useEffect(() => {
        console.log(taskList);
    }, [taskList]);

    return (
        <div className={styles.list}>
            {taskList.map(({ id, text, completed }) => (
                <TaskItem key={id} id={id} text={text} completed={completed} />
            ))}
        </div>
    );
}
