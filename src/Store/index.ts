import * as user from './Reducers/user.Reducer';
import * as affair from './Reducers/affair.Reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface State {
  user: user.State,
  affair: affair.State
}

export const reducers: ActionReducerMap<State> = {
  user: user.reducer,
  affair: affair.reducer
};

export const selectUserState = createFeatureSelector<user.State>('user');
export const getUsers = createSelector(selectUserState, user.getAllUsers);

export const selectAffairState = createFeatureSelector<affair.State>('affair');
export const getAffairs = createSelector(selectAffairState, affair.getAffairs);