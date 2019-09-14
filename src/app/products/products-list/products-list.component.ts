import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services';

@Component({
  selector: 'miza-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products:any = [];
  dataLoader: boolean;
  searchString: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.displayProducts();
  }
  /**
   * Display list of products
   */
  displayProducts() {
 
      this.products = [
        {id:1, name: "microwive", price:300, mark:"Toshiba"},
        {id:2, name: "television", price:500, mark: "LG"},
        {id:2, name: "washing machine", price:400, mark: "LG"},
        {id:2, name: "air-conditioner", price:800, mark: "Hair"},
        {id:2, name: "fridge", price:1500, mark: "LG"}
        
      ];
      
    }
}
