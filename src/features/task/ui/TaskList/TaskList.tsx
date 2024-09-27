import { useDispatch, useSelector } from 'react-redux';
import styles from './TaskList.module.scss';
import { DraggleTaskItem, moveTask } from '~/entities/task';
import { useEffect, useState } from 'react';

export function TaskList() {
    const taskList = useSelector((state: RootState) => state.tasks.tasks);
    const dispatch = useDispatch();

    const [tasks, setTasks] = useState(taskList);

    const moveTaskItem = (dragIndex: number, hoverIndex: number) => {
        const dragTask = tasks[dragIndex];
        const newTasks = [...tasks];
        newTasks.splice(dragIndex, 1);
        newTasks.splice(hoverIndex, 0, dragTask);

        setTasks(newTasks);
        dispatch(moveTask({ dragIndex, hoverIndex }));
    };

    useEffect(() => {
        setTasks(taskList);
    }, [taskList]);

    return (
        <div className={styles.list}>
            {tasks.map(({ id, text, completed }, index) => (
                <DraggleTaskItem
                    key={id}
                    id={id}
                    text={text}
                    completed={completed}
                    moveTask={moveTaskItem}
                    index={index}
                />
            ))}
        </div>
    );
}
