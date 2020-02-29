import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component'


const routes: Routes = [ // adding a route
  {
    path: '', // we specify an empty string here, when lazy loading, because otherwise it would be: elements/elements, we don't want that
    component: ElementsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
