import React, { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Code.module.scss';

export interface CodeProps {
    className?: string;
    children: ReactNode;
}

export const Code = memo(({ className, children }: CodeProps) => {
    const { t } = useTranslation();
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.button} theme={ButtonTheme.CLEAR}>{t('Копировать')}</Button>

            <code>
                {children}
            </code>
        </pre>
    );
});
