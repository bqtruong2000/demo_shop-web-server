import { Injectable } from '@nestjs/common';
import { Item } from 'src/models/item.modul';

@Injectable()
export class ItemService {
  items = [
    {
      id: '1',
      image:
        'https://th.bing.com/th/id/OIP.ov57nJfrUFnjSLZ40PMgDgHaFs?pid=ImgDet&rs=1',
      name: 'Apple MacBook Air M1 ',
      description:
        'CPU: Apple M1, Display: 13.3-inch, 2560 x 1600-pixel, Memory: 8GB, Storage: 256GB',
      price: '$999.00',
    },
    {
      id: '2',
      image:
        'https://www.apple.com/v/macbook-air-m2/e/images/overview/routers/trade_in__ck6hzm7f6qc2_medium.jpg',
      name: 'Apple MacBook Air M2 ',
      description:
        'CPU: Apple M2, Display: 13.6-inch, 2560 x 1600-pixel, Memory: 16GB, Storage: 1TB',
      price: '$1149.00',
    },
    {
      id: '3',
      image: 'https://www.proshop.dk/Images/Apple_Macbook_Pro_Front.png',
      name: 'Apple MacBook Pro M1 ',
      description:
        'CPU: Apple M1, Display: 13.6-inch, 2560 x 1600-pixel, Memory: 16GB, Storage: 1TB to 2TB',
      price: '$1199.00',
    },
    {
      id: '4',
      image:
        'https://www.apple.com/v/macbook-pro-13/p/images/overview/compare/compare_mba__bkn24vmm59py_medium.png',
      name: 'Apple MacBook Pro M2 ',
      description:
        'CPU: Apple M2, Display: 14.2-inch, 2560 x 1600-pixel, Memory: 96GB, Storage: 8TB',
      price: '$1999.00',
    },
    {
      id: '5',
      image:
        'https://www.apple.com/v/macbook-pro-13/p/images/overview/compare/compare_mbp_14_16__eqw16nwkegia_medium.png',
      name: 'Apple MacBook Pro M2 16"',
      description:
        'CPU: Apple M2, Display: 16.2-inch, 2560 x 1600-pixel, Memory: 96GB, Storage: 8TB',
      price: '$2499.00',
    },
  ];

  getAllItem() {
    return this.items;
  }

  getItemById(id: string) {
    const index = this.items.findIndex((items) => items.id == id);
    return this.items[index];
  }

  createNewItem(newItem: Item) {
    this.items.push(newItem);
    return { message: 'Created Successly!' };
  }

  updateItem(itemUpdate: Item) {
    const index = this.items.findIndex((items) => items.id == itemUpdate.id);
    this.items[index] = itemUpdate;
    return { message: 'Updated Successly!' };
  }

  deleteItemById(id: string) {
    const index = this.items.findIndex((items) => items.id == id);
    if(index){
        return "Can not find!"
    }
    this.items.splice(index, 1);
    return { message: 'Deleted Successly!' };
  }
}
