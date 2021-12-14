import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[
    {
      id:'1',
      image: 'assets/images/toros.jpg',
      title:'toros de inseminacion tipo 1',
      price: 300000,
      description: ' estos toros ...'

    },
    {
      id:'2',
      image: 'assets/images/engorde.jpg',
      title:'vacas para engorde tipo 1',
      price: 15000,
      description: ' estos toros ...'

    },

  ]
  constructor() { }

  ngOnInit(): void {
  }
  clickProduct(id:number){
    console.log('product');
    console.log(id);

  }

}
