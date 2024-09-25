import clsx from 'clsx';
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import styles from './Text.module.scss';

export type Colors =
    | 'orange'
    | 'violet'
    | 'orangeDark'
    | 'orangeWhite'
    | 'white'
    | 'gray100'
    | 'gray200'
    | 'gray500'
    | 'gray600'
    | 'gray900'
    | 'currentColor';

export type Text<T extends ElementType> = {
    children: ReactNode;
    as?: T;
    className?: string;
    color?: Colors;
};

export function Text<T extends ElementType = 'p'>({
    children,
    as,
    className,
    color = 'gray900',
}: Text<T> & Omit<ComponentPropsWithoutRef<T>, keyof Text<T>>) {
    const Tag = as || 'p';
    return (
        <Tag className={clsx(styles[`tag_${Tag}`], styles[color], className)}>
            {children}
        </Tag>
    );
}
