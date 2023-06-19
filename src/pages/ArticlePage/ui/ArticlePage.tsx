import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePage.module.scss';

export interface ArticlePageProps {
    className?: string
}

const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            { t('ARTICLES PAGE') }

        </div>
    );
};

export default memo(ArticlePage);
