import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './directives/product-card.directive';
import { CreditPipe } from './pipes/credit.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { ProductPricePipe } from './pipes/product-price.pipe';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { UserTemplateDrivenFormComponent } from './components/users/user-template-driven-form/user-template-driven-form.component';
import { UserReactiveFormComponent } from './components/users/user-reactive-form/user-reactive-form.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardDirective,
    CreditPipe,
    NavbarComponent,
    FooterComponent,
    ProductsParentComponent,
    ProductPricePipe,
    HomeComponent,
    NotFoundPageComponent,
    GroupOfRoutesComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    UserTemplateDrivenFormComponent,
    UserReactiveFormComponent,
    EditProductComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
