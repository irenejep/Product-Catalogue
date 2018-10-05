import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import { Product } from "../product.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products$: Object;
  body: any;
  // @Input()
  // products: Product;
  // editValue = "";
  // editing = false;

  constructor(private data: DataService) {}
  // onEdit() {
  //   this.editing = true;
  //   this.editValue = this.product.content;
  // }
  ngOnInit() {
    this.data
      .getProducts()
      .subscribe(data => ((this.products$ = data), { headers: Headers }));

    this.data.saveProduct(
      this.body.subscribe(content => {
        console.log(content);
      })
    );
  }
}
