import { createReducer, on, State } from '@ngrx/store';
import { ItemState } from '../states/item.state';
import * as ItemAction from '../actions/item.action';

const initialState: ItemState = {
  item: [],
  isSuccess: true,
  error: '',
  loading: false,
  isCreated: true,
  isUpdated: true,
  isDelete: false,
};

export const itemReducer = createReducer(
  initialState,
  on(ItemAction.getItem, (state) => ({ ...state, loading: true })),
  on(ItemAction.getItemSuccess, (state, action) => ({
    ...state,
    item: action.item,
    loading: false,
  })),
  on(ItemAction.getItemFailure, (state, action) => ({
    ...state,
    loading: true,
    isSuccess: false,
  }))
);
