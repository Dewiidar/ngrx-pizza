import {createEntityAdapter, EntityState} from '@ngrx/entity';
import * as actions from './pizza.actions';
import {createFeatureSelector} from '@ngrx/store';

// Main data interface
export interface Pizza {
    id: string;
    size: string;
}

// Entity adapter
// (will format the data in a specific way & will provide access to a number of different helpers for performing CRUD operations)
export const pizzaAdapter = createEntityAdapter<Pizza>();

// EntityState is an interface that gives our data a consistent structure
export interface State extends EntityState<Pizza> {}

// Default data / initial state
const defaultPizza = {
    ids: ['123'],
    entities: {
        '123': {
            id: '123',
            size: 'small'
        }
    }
};

export const initialState: State = pizzaAdapter.getInitialState(defaultPizza);



// Reducer
export function pizzaReducer(
    state: State = initialState,
    action: actions.PizzaActions
) {
    switch (action.type) {
        case actions.CREATE:
            return pizzaAdapter.addOne(action.payload, state);

        case actions.UPDATE:
            return pizzaAdapter.updateOne({
                id: action.id,
                changes: action.changes
            }, state);

        case actions.DELETE:
            return pizzaAdapter.removeOne(action.id, state);

        default:
            return state;
    }
}


// Selectors
export const getPizzaState = createFeatureSelector<State>('pizza');

export const { selectIds, selectEntities, selectAll, selectTotal } = pizzaAdapter.getSelectors(getPizzaState);
