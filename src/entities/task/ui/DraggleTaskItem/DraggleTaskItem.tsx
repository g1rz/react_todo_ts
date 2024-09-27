import { useDrag, useDrop } from 'react-dnd';
import { DraggelTask } from '../../model/types';
import { TaskItem } from '../TaslItem/TaskItem';

import styles from './DraggleTaskItem.module.scss';
import clsx from 'clsx';

export function DraggleTaskItem({
    id,
    text,
    completed,
    moveTask,
    index,
}: DraggelTask) {
    const [{ isDragging }, drag] = useDrag({
        type: 'TASK',
        item: { id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const [, drop] = useDrop({
        accept: 'TASK',
        hover: (item: { id: string; index: number }) => {
            if (!item || item.index === index) {
                return;
            }

            moveTask(item.index, index);
            item.index = index;
        },
    });
    return (
        <div
            ref={(node) => drag(drop(node))}
            className={clsx(isDragging && styles.dragging)}
        >
            <TaskItem id={id} text={text} completed={completed} />
        </div>
    );
}
