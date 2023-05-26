import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
}
export const Text = (props: TextProps) => {

    const {
        className,
        title,
        text,

    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
