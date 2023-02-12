import { Action } from "@ngrx/store";

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0
}

export const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, counter: state.counter +1 }
    case 'DECREMENT':
      return {...state, counter: state.counter -1 }
    default:
      return state
}}
