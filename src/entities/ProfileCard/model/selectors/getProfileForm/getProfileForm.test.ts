import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/ProfileCard';

describe('getProfileForm.test', () => {
    test('should return form', () => {
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
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should return empty form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: {},
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual({});
    });
});
