import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { DashbordRoutingModule } from './dashbord-routing.module';
import { CoffeCardComponent } from './coffe-card/coffe-card.component';
import { DashbordPageComponent } from './dashbord-page/dashbord-page.component';

@NgModule({
  declarations: [CoffeCardComponent, DashbordPageComponent],
  imports: [CommonModule, DashbordRoutingModule, FormsModule],
})
export class DashbordModule {}
