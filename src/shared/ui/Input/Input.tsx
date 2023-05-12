import React, {ChangeEvent, InputHTMLAttributes} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
export interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}
export const Input = (props: InputProps) => {

    const {
        className,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            >

            </input>

        </div>
    );
};
