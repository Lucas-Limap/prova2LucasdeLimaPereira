import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MusicsComponent } from './components/musics/musics.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MusicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
