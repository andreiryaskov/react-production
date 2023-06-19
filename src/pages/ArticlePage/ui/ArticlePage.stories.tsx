import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticlePage from './ArticlePage';

export default {
    title: 'shared/ArticlePage',
    component: ArticlePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = (args) => <ArticlePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
