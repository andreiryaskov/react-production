import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data = {
    id: '1',
    title: 'title',
    subtitle: 'subtitle',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [ArticleBlockType.TEXT],
};
describe('fetchArticleById.test', () => {
    test('get data', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk(`/articles/${data.id}`);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('rejected data', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(`/articles/${data.id}`);

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
