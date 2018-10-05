import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./product.model";
// const httpOptions = {
//   headers: new HttpHeaders({
//     "Access-Control-Allow-Origin": "*",
//     Authorization: "authkey"
//   })
// };

const headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get("http://127.0.0.1:8000/products");
  }
  // getCategories() {
  //   return this.http.get("http://127.0.0.1:8000/categories");
  // }
  saveProduct(product: Product) {
    const body = JSON.stringify({ product });
    const headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");
    // const headers = new HttpHeaders().set("Content-Type", "Application/json");
    // const httpOptions = new Option(methods:Post, headers: headers );
    return this.http.post("http://127.0.0.1:8000/products", body, {
      headers: headers
    });
  }
}
