import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Components/add/add.component';
import { HomeComponent } from './Components/home/home.component';
import { UpdateComponent } from './Components/update/update.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home' , component: HomeComponent},
  {path:'add', component:AddComponent},
  {path:'update/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
