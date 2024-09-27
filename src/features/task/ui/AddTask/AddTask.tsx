import { Button, TextField } from '~/shared';
import styles from './AddTask.module.scss';
import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '~/entities/task';

export function AddTask() {
    const [textValue, setTextValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (textValue === '') {
            alert('The task must not be empty');
            return;
        }

        dispatch(addTask(textValue.trim()));
        setTextValue('');
    };

    return (
        <form className={styles.addTask} onSubmit={handleSubmit}>
            <TextField
                placeholder="enter task"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
            />
            <Button>add</Button>
        </form>
    );
}
