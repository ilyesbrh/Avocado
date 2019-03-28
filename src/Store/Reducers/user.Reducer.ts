import { userActions, userActionTypes } from '../Actions/user.Action';
import { user } from '../model';

export interface State {
    users:user[],
    LoggedIn:user
};

const initialState: State = {
    users:[],
    LoggedIn:null
};

export function reducer(state = initialState, action: userActions): State {
    switch (action.type) {
        case userActionTypes.allUsers: {
            return {...state,users:action.payload};
        }
        default: {
            return state;
        }
    }
}

export const getAllUsers = (state: State) => state.users;

