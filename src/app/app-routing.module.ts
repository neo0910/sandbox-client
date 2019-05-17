import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'my-counter', component: MyCounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
