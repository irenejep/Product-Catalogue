import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { ProductsComponent } from "./products/products.component";
import { ReportsComponent } from "./reports/reports.component";
import { ProductaddComponent } from "./productadd/productadd.component";

const routes: Routes = [
  {
    path: "",
    component: CategoryComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "reports",
    component: ReportsComponent
  },
  {
    path: "addproduct",
    component: ProductaddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
