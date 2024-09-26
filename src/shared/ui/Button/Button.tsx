import clsx from 'clsx';
import { ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonView = 'primary' | 'secondary';

type Button = {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    view?: ButtonView;
};

export function Button({
    children,
    className,
    onClick,
    view = 'primary',
    ...props
}: Button) {
    return (
        <button
            className={clsx(styles.button, styles[view], className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
