
import { Reducer } from "redux";
import {HomeAction, HomeState, HomeTypes} from "./types";

const INITIAL_STATE: HomeState = {
    data: {},
    loading: false,
}

const reducer: Reducer<HomeState, HomeAction> = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case HomeTypes.SET_DATA_HOME :
            return {...state, data: action.data }
        case HomeTypes.SET_LOADING :
            return {...state, loading: action.loading }
        default:
            return state
    }
}

export default reducer;