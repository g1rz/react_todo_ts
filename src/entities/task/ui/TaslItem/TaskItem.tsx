import { Button, TextField } from '~/shared';
import { Task } from '../../model/types';

import styles from './TaskItem.module.scss';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../../model/taskSlice';

export function TaskItem({ id, text, completed }: Task) {
    const [isEdit, setIsEdit] = useState(false);
    const [isCompletedTask, setIsCompletedTask] = useState(completed);
    const [visibleText, setVisibleText] = useState(text);
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const handleSaveEdit = () => {
        if (visibleText === '') {
            alert('The task must not be empty');
            return;
        }

        setIsEdit(false);
        dispatch(editTask({ id, text: visibleText }));
    };
    const handleCancelEdit = () => {
        setIsEdit(false);
        setVisibleText(text);
    };

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    const handleToggleTask = () => {
        setIsCompletedTask((isComplete) => !isComplete);
        dispatch(toggleTask(id));
    };

    const handleEdit = () => {
        setIsEdit(true);
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={styles.taskItem}>
            <input
                type="checkbox"
                checked={isCompletedTask}
                onChange={handleToggleTask}
            />
            <TextField
                view={!isEdit ? 'clear' : 'default'}
                value={visibleText}
                onChange={(e) => {
                    setVisibleText(e.target.value);
                }}
                readOnly={!isEdit}
                ref={inputRef}
            />
            {!isEdit && (
                <>
                    <Button onClick={handleEdit}>Edit</Button>
                    <Button onClick={handleDelete} view="secondary">
                        Delete
                    </Button>
                </>
            )}
            {isEdit && (
                <>
                    <Button onClick={handleSaveEdit}>Save</Button>
                    <Button onClick={handleCancelEdit}>Cancel</Button>
                </>
            )}
        </div>
    );
}
