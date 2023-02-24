import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ItemService } from 'src/app/services/item.service';
import { ItemState } from 'src/app/states/item.state';
import * as ItemActions from '../../actions/item.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  item$: Observable<ItemState>;
  constructor(
    private itemService: ItemService,
    private itemStore: Store<{ item: ItemState }>,
    public authService: AuthService
  ) {
    this.item$ = this.itemStore.select('item');
  }

  ngOnInit(): void {
    this.itemStore.dispatch(ItemActions.getItem({ page: 1, itemPerPage: 2 }));
  }

  logout(){

  }
}
