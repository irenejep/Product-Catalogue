import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-productadd",
  templateUrl: "./productadd.component.html",
  styleUrls: ["./productadd.component.css"]
})
export class ProductaddComponent implements OnInit {
  products$: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data
      .getProducts()
      .subscribe(data => ((this.products$ = data), { headers: Headers }));
  }
}
