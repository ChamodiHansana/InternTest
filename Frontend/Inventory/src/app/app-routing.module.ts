import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ResearcherComponent } from './researcher/researcher.component';




const routes: Routes = [
{path:'customer',component:CustomerComponent},
{path:'researcher',component:ResearcherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
