import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            { t('ARTICLE DETAILS PAGE') }
        </div>
    );
};

export default memo(ArticleDetailsPage);
