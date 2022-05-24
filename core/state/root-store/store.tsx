import {Action, AnyAction, Reducer, ReducersMapObject, Store, StoreEnhancer} from 'redux';
import {configureStore, createSelector} from '@reduxjs/toolkit';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import userStateReducer, { initialUserState, UserState } from '../user-state/user-state';


export interface RootState {
    user: UserState;
}

const initialState: RootState = {
    user: initialUserState
}

// create a makeStore function
const store = () => configureStore({
    reducer: {
        user: userStateReducer
    }
});

const selectSelf = (state: RootState) => state;

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(store, {debug: true});

// Getters
export const getUid = createSelector(selectSelf, (state) => state.user.uid);