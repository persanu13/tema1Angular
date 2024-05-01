import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordPageComponent } from './dashbord-page/dashbord-page.component';

const routes: Routes = [{ component: DashbordPageComponent, path: '' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashbordRoutingModule {}
