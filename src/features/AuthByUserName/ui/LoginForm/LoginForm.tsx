import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import {Input} from "shared/ui/Input/Input";

export interface LoginFormProps {
    className?: string
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" className={cls.input} />
            <Input type="text" className={cls.input} />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
