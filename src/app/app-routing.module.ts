import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { UserTemplateDrivenFormComponent } from './components/users/user-template-driven-form/user-template-driven-form.component';
import { UserReactiveFormComponent } from './components/users/user-reactive-form/user-reactive-form.component';
import { userGuard } from './Guards/user.guard';
import { NewProductComponent } from './components/admin/new-product/new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { RegisterComponent } from './components/register/register.component';
// import { GroupOfRoutesComponent } from './components/group-of-routes/group-of-routes.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'',redirectTo:'/productsParent',pathMatch:"full"},
  {path:"home",component:HomeComponent,title:"home page"},
  {path:"products",component:ProductsComponent,title:"products page",canActivate:[userGuard]},
  {path:"productsParent",component:ProductsParentComponent,title:"products parent page"},
  {path:'productDetails/:id',component:ProductDetailsComponent,title:'product details'},
  {
    path: 'user',
    loadChildren: () => import('src/app/components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('src/app/components/admin/admin.module').then(m => m.AdminModule)
  },
  {path:"userLogIn",component:UserAuthComponent,title:"user logIn"},
  {path:"userLogOut",component:UserAuthComponent,title:"user logOut"},
  {path:"userTemplateForm",component:UserTemplateDrivenFormComponent,title:"user template form"},
  {path:"userReactiveForm",component:UserReactiveFormComponent,title:"user reactive form"},

  // {path:"editProduct",component:EditProductComponent,title:"edit product"},

  { path: 'edit-product/:id', component: EditProductComponent },

  { path: 'register', component: RegisterComponent },



  {path:'**',component:NotFoundPageComponent,title:'not found'}

  // {path:'main',component:GroupOfRoutesComponent,children:[
  //   {path:"home",component:HomeComponent,title:"home page"},
  //   {path:"products",component:ProductsComponent,title:"products page"},
  //   {path:"productsParent",component:ProductsParentComponent,title:"products parent page"},
  // ]},
  // {path:'**',component:NotFoundPageComponent,title:'not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
