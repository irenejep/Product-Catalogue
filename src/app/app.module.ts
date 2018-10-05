import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ProductsComponent } from "./products/products.component";
import { CategoryComponent } from "./category/category.component";
import { ReportsComponent } from "./reports/reports.component";
import { ProductaddComponent } from "./productadd/productadd.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProductsComponent,
    CategoryComponent,
    ReportsComponent,
    ProductaddComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
