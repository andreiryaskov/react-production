import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';

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
});
