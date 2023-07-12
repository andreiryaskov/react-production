import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            first: 'Andrei',
            lastname: 'R',
            age: 35,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Krasnodar',
            username: 'Andreiryaskov',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
