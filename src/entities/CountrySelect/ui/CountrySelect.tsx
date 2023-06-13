import React, { useCallback } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../model/types/country';

export interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
];
export const CountrySelect = (props: CountrySelectProps) => {
    const {
        className,
        readonly,
        value,
        onChange,
    } = props;

    const { t } = useTranslation();

    const mods: Mods = {};

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', mods, [className])}
            label={t('Укажите город')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
