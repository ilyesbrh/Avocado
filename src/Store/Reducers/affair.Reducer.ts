import { affairActionTypes } from '../Actions/affair.Action';
import { affairActions } from '../Actions/affair.Action';
import { affair } from '../model';

export interface State {
    affairs: affair[],
    count: number
};

const initialState: State = {
    affairs: [],
    count: 0
};

export function reducer(state = initialState, action: affairActions): State {
    switch (action.type) {

        case affairActionTypes.setAffairs: {

            return { ...state, affairs: action.payload };
        }
        case affairActionTypes.postAffair: {

            return { ...state, affairs: [...state.affairs, action.payload] };
        }
        case affairActionTypes.deleteAffair: {

            console.log(action.payload[1]);
            let filteredArry = state.affairs.filter((val,index,arry)=>{
                return index != action.payload[1];
            });
            console.log(filteredArry);
            
            return { ...state, affairs: [...filteredArry] };
        }
        case affairActionTypes.setAffairRowCount: {

            return { ...state, count: action.payload };
        }

        default: {
            return state;
        }
    }
}

export const getAffairs = (state: State) => state.affairs;
export const getAffairsRowCount = (state: State) => state.count;
