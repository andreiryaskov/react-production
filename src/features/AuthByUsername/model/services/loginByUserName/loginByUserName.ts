import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';

interface LoginAsyncThunkProps {
    username: string;
    password: string;
};

export const loginByUserName = createAsyncThunk<User, LoginAsyncThunkProps, {rejectValue: string}>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue('Неправильно введен username или password');
        }
    }
)
