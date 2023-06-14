import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';
import avatar from 'shared/assets/tests/storybook_avatar.png';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Andrei',
            lastname: 'R',
            age: 35,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Krasnodar',
            username: 'Andreiryaskov',
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Andrei',
            lastname: 'R',
            age: 35,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Krasnodar',
            username: 'Andreiryaskov',
            avatar,
        },
    },
})];
