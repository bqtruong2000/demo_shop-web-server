import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Post, Put } from '@nestjs/common/decorators';
import { Item } from 'src/models/item.modul';
import { ItemService } from 'src/services/item/item.service';

@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  getAllItem() {
    return this.itemService.getAllItem();
  }

  @Get('/:id')
  getItemById(@Param('id') id: string) {
    return this.itemService.getItemById(id);
  }

  @Post('/create')
  createItem(@Body() item: Item) {
    return this.itemService.createNewItem(item);
  }

  @Put('/update')
  updateItemById(@Body() item: Item) {
    return this.itemService.updateItem(item);
  }

  @Delete('delete')
  deleteItemById(@Param('id') id: string) {
    return this.itemService.deleteItemById(id);
  }
}
