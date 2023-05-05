import {StateSchema} from "app/providers/StoreProvider";

export const getCounter = (state: StateSchema) => state.counter; // импортируем из верхнего слоя, так лучше не делатьS
