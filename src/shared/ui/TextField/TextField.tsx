import clsx from 'clsx';
import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';

import styles from './TextField.module.scss';

type TextType = 'text' | 'phone' | 'email';
type ViewType = 'default' | 'clear';

type TextField = {
    value: string;
    onChange: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    view?: ViewType;
    placeholder?: string;
    className?: string;
    isEdit?: boolean;
    type?: TextType;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'type'>;

export const TextField = forwardRef<HTMLInputElement, TextField>(
    (props, ref) => {
        const {
            value,
            onChange,
            placeholder,
            className,
            type = 'text',
            view = 'default',
            isEdit = true,
            ...otherProps
        } = props;

        return (
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={!isEdit}
                className={clsx([styles.input, styles[view], className])}
                {...otherProps}
                ref={ref}
            />
        );
    },
);
