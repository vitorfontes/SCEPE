import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductCatalog } from 'src/app/shared/models/product-catalog.model';

@Injectable({ providedIn: 'root' })
export class ProductCatalogService {

  private urlAPI: string = 'http://localhost:9095'

  constructor(private http: HttpClient) { }

  public getProductsCatalog = (): Observable<ProductCatalog[]> => {
    const url: string = `${this.urlAPI}/product-catalog`
    return this.http.get<ProductCatalog[]>(url)
  }

  public postProductCatalog = (product_catalog: ProductCatalog): Observable<ProductCatalog[]> => {
    const url: string = `${this.urlAPI}/product-catalog`
    return this.http.post<ProductCatalog[]>(url, product_catalog)
  }

  public putProductCatalog = (product_catalogUpdate: ProductCatalog, product_catalog_id: number): Observable<ProductCatalog[]> => {
    const url: string = `${this.urlAPI}/product-catalog/${product_catalog_id}`
    return this.http.put<ProductCatalog[]>(url, product_catalogUpdate)
  }

  public deleteProductCatalog = (product_catalog_id: number): Observable<ProductCatalog[]> => {
    const url: string = `${this.urlAPI}/product-catalog/${product_catalog_id}`
    return this.http.delete<ProductCatalog[]>(url)
  }
}
