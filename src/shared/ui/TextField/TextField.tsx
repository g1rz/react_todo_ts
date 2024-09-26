import clsx from 'clsx';
import { ChangeEvent } from 'react';

import styles from './TextField.module.scss';

type TextType = 'text' | 'phone' | 'email';

type TextField = {
    value: string;
    onChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    placeholder?: string;
    className?: string;
    type?: TextType;
};

export function TextField({
    value,
    onChange,
    placeholder,
    className,
    type = 'text',
    ...props
}: TextField) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={clsx([styles.input, className])}
            {...props}
        />
    );
}

export default TextField;
