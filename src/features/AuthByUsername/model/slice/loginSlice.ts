import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginSchema} from "../types/loginSchema";
import {
    loginByUserName
} from 'features/AuthByUsername/model/services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
    password: '',
    username: '',
    error: 'Error',
    isLoading: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUserName.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginAction } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
