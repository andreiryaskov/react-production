import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateSchema { // передаем как дженерик в configureStore<StateSchema>({})
    counter: CounterSchema;
    user: UserSchema;
}
