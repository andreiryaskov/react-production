import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';
import avatar from 'shared/assets/tests/storybook_avatar.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Andrei',
        lastname: 'R',
        age: 35,
        currency: Currency.USD,
        country: Country.Russia,
        city: 'Krasnodar',
        username: 'Andreiryaskov',
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
