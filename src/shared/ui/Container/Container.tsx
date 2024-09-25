import { ReactNode } from 'react';
import styles from './Container.module.scss';
import clsx from 'clsx';

type Container = {
    children: ReactNode;
    className?: string;
};

export function Container({ children, className }: Container) {
    return <div className={clsx(styles.container, className)}>{children}</div>;
}
