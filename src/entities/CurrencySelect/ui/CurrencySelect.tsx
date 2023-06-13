import React, { useCallback } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Currency } from 'entities/CurrencySelect';
import { Select } from 'shared/ui/Select/Select';

export interface CurrencySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.RUB, content: Currency.RUB },
];
export const CurrencySelect = (props: CurrencySelectProps) => {
    const {
        className,
        readonly,
        value,
        onChange,
    } = props;

    const { t } = useTranslation();

    const mods: Mods = {};

    const onChangeHandler = useCallback(() => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', mods, [className])}
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
