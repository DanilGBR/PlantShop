import { createAction, props } from "@ngrx/store";
import { User } from "./store.interface";


export const fetchUserInfo = createAction('[App] Fetch User Information')
export const fetchUserInfoSuccess = createAction('[App] Fetch User Information Success', props<User>() )
export const fetchUserInfoError = createAction('[App] Fetch User Information Error', props<any>)
