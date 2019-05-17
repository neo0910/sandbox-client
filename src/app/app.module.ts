import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { counterReducer } from './counter.reducer';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
