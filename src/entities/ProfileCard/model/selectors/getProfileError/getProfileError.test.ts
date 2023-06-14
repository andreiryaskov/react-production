import { getProfileError } from 'entities/ProfileCard';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('123');
    });
});
