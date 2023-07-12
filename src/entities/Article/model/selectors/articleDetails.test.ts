import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';

describe('articleDetails.test', () => {
    test('should return error', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('should return epty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
    });

    test('should return loading false', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: false,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toBe('error');
    });
});
