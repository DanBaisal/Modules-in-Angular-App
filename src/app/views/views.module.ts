import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemsListComponent } from './items-list/items-list.component';


@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent, ItemsListComponent],
  imports: [
    SharedModule,
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
