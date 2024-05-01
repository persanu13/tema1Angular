import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./dashbord/dashbord.module').then((m) => m.DashbordModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
