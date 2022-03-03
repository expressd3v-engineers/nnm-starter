import {AnyAction, combineReducers, Reducer} from "redux";
import { routerReducer } from "connected-next-router";
import { HYDRATE } from "next-redux-wrapper";
import ThemeReducer from "./theme.reducer";

const combinedReducer = combineReducers({
    router: routerReducer,
    theme: ThemeReducer
})

const RootReducer: Reducer<any, AnyAction> = (state: any, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (typeof window !== "undefined" && state?.router) {
            nextState.router = state.router;
        }
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};


export default RootReducer
