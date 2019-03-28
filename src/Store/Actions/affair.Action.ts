import { Action } from '@ngrx/store';
import { affair } from '../model';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum affairActionTypes {
    postAffair = 'post/affair'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class addAffair implements Action {
    readonly type = affairActionTypes.postAffair;

    constructor(public payload:affair) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type affairActions = addAffair;
                        