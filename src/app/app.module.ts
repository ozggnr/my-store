import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    AboutComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
