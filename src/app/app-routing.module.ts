import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {CreateComponent} from "./create/create.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'new', component: CreateComponent},
  {path: 'detail/:name', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
