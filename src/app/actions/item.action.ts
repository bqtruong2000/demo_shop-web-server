import { ItemModel } from '../models/item.module';
import { createAction, props } from '@ngrx/store';

export const getItem = createAction(
  '[Article] Get Perginate',
  props<{ page: number; itemPerPage: number }>()
);
export const getItemSuccess = createAction(
  '[Article] Get Item Success',
  props<{ item: ItemModel[] }>()
);
export const getItemFailure = createAction(
  '[Article] Get Item Failure',
  props<{ error: string }>()
);
