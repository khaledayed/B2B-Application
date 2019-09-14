import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }

  /**
   * Get specific Product
   *
   * @param id Product identifier
   * @returns Product of given id
   */
  get(id): Observable<Product> {
    return this.apiService.get('/products/' + id)
      .pipe(map(data => data));
  }
  /**
   * List of all customers
   */
  list(): Observable<Product[]> {
    return this.apiService.get('/products')
      .pipe(map(data => data));
  }
  /**
   * Remove Product
   *
   * @param id Product identifier
   * @returns deleted Product
   */
  destroy(id): Observable<Product> {
    return this.apiService.delete('/products/' + id);
  }
  /**
   * Update a Product or create a new one
   *
   * @param product Product data
   * @returns updated Product
   */
  save(product): Observable<Product> {
    // If we're updating an existing product
    if (product.hasOwnProperty('id')) {
      return this.apiService.put('/products/' + product.id, product)
        .pipe(map(data => data));

      // Otherwise, create a new product
    } else {
      return this.apiService.post('/products/', product)
        .pipe(map(data => data));
    }
  }
}
