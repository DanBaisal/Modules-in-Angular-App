import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'elements', loadChildren: () => import('./elements/elements.module')
    .then((m) => m.ElementsModule)
  }, // lazy loading
  { path: 'collections', loadChildren: () => import('./collections/collections.module')
    .then((m) => m.CollectionsModule)}, 
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent } // ** means that if no route was found, link to not found component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
