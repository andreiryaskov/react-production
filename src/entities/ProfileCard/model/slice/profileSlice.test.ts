import { profileActions, profileReducer, updateProfileData } from 'entities/ProfileCard';
import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';
import { ProfileSchema, ValidateProfileError } from '../types/profile';

const data = {
    first: 'Andrei',
    lastname: 'R',
    age: 35,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Krasnodar',
    username: 'Andreiryaskov',
};
describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,

        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,

        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
