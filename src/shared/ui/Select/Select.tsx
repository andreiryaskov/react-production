import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string;
    content: string;
}
export interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}
export const Select = memo((props: SelectProps) => {
    const {
        className,
        options,
        label,
        readonly,
        onChange,
        value,
    } = props;
    const { t } = useTranslation();

    const optionsList = useMemo(() => options?.map((item) => (
        <option
            className={cls.option}
            value={item.value}
            key={item.value}
        >
            {item.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };
    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}

            </select>

        </div>
    );
});
