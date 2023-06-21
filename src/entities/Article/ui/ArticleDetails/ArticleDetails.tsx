import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetails.module.scss';

export interface ArticleDetailsProps {
    className?: string
}

export const ArticleDetails = memo(({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            {t('ARTICLE DETAILS')}
        </div>
    );
});
