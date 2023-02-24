import { ItemModel } from '../models/item.module';

export interface ItemState {
  item: ItemModel[];
  isSuccess: boolean;
  error: string;
  loading: boolean;
  isCreated: boolean;
  isUpdated: boolean;
  isDelete: boolean;
}
