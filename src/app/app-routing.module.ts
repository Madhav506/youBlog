import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: HomeComponent },
     ])],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
