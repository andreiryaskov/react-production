import { CounterSchema } from 'entities/Counter';

export interface StateSchema { // передаем как дженерик в configureStore<StateSchema>({})
    counter: CounterSchema
}
