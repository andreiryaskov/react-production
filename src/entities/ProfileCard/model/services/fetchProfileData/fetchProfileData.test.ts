import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';
import { fetchProfileData } from '../fetchProfileData/fetchProfileData';

const data = {
    first: 'Andrei',
    lastname: 'R',
    age: 35,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Krasnodar',
    username: 'Andreiryaskov',
};
describe('fetchProfileData.test', () => {
    test('get data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('rejected data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
