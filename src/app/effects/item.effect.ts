import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as ItemAction from '../actions/item.action';
import { ItemModel } from '../models/item.module';
import { ItemService } from '../services/item.service';

@Injectable()
export class ItemEffect {
  constructor(private action$: Actions, private itemService: ItemService) {}

  getArticles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ItemAction.getItem),
      switchMap((action) => {
        return this.itemService.getAllItem(action.page, action.itemPerPage);
      }),
      map((response) => {
        return ItemAction.getItemSuccess({
          item: <Array<ItemModel>>response,
        });
      }),
      catchError((error) => {
        return of(ItemAction.getItemFailure({ error: error.message }));
      })
    )
  );
}
