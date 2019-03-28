import { affairActionTypes } from '../Actions/affair.Action';
import { affairActions } from '../Actions/affair.Action';
import { affair } from '../model';

export interface State {
    affairs:affair[]
};

const initialState: State = {
    affairs:[]
};

export function reducer(state = initialState, action: affairActions): State {
    switch (action.type) {
        
        case affairActionTypes.postAffair: {
            state.affairs.push(action.payload);
            return state;
        }

        default: {
            return state;
        }
    }
}

export const getAffairs = (state: State) => state.affairs;
