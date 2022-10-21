import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsNewComponentComponent } from './components/products/products-new-component/products-new-component.component';
import { TestAdditionalComponent } from './test-additional/test-additional.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'test-files',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },
          {
            path: 'list',
            component: ProductsListComponent,
          },
          {
            path: 'new',
            component: ProductsNewComponentComponent
          }
        ]
      }
    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'test-files',
    component: TestAdditionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
