import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors, ValidateProfileError } from 'entities/ProfileCard';

describe('getProfileValidateError.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.NO_DATA,
                    ValidateProfileError.SERVER_ERROR,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.NO_DATA,
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
