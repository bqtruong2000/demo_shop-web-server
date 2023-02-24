import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private httpClient: HttpClient) {}

  getAllItem(page: number, itemPerPage: number) {
    let url = 'http://localhost:3000/';
    return this.httpClient.get(`${url}item`);
  }
}
