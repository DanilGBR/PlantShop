import { createReducer, on } from "@ngrx/store";
import { AppState } from "./store.interface";
import * as AppActions from "./app.actions"


export const initialState: AppState = {user: null}

export const appReducer = createReducer(
  initialState,
  on(AppActions.fetchUserInfoSuccess, (state, user) => {
    return {
      ...state,
      user,
    }
  }),
)
