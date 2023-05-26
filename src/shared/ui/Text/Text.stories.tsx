import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text',
    text: 'Text lorem ipsum bla bla',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text lorem ipsum bla bla',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Text',
};
