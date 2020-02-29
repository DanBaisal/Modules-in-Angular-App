import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { ElementsModule } from './elements/elements.module'; we don't need that for lazy loading, it has to go
// import { CollectionsModule } from './collections/collections.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // ElementsModule, 
    // CollectionsModule,
    AppRoutingModule // put the routing module in the very back, so it doesn't clash with other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
