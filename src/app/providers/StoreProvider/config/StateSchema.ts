import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import {LoginSchema} from "features/AuthByUserName";

export interface StateSchema { // передаем как дженерик в configureStore<StateSchema>({})
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
}
