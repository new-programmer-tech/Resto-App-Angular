import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  {
    component:AddRestoComponent,
    path:'add'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:ListRestoComponent,
    path:'list'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:UpdateRestoComponent,
    path:'update/:id'
  },
  {
    component:AddRestoComponent,
    path:'add'
  },
  { path: '**', pathMatch: 'full', 
  component: PagenotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
