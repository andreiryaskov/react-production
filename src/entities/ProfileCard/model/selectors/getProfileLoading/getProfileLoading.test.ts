import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from 'entities/ProfileCard';

describe('getProfileLoading.test', () => {
    test('should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });
    test('should return isLoading false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });
});
