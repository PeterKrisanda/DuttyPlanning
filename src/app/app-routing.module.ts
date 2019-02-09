import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ZoznamZamestnancovComponent } from './zoznam-zamestnancov/zoznam-zamestnancov.component';
import { VytvoritSluzbyComponent } from './vytvorit-sluzby/vytvorit-sluzby.component';
import { AktualneSluzbyComponent } from './aktualne-sluzby/aktualne-sluzby.component';


const routes: Routes=[
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'zoznamzamestnancov', component: ZoznamZamestnancovComponent},
  {path: 'vytvoritsluzby', component: VytvoritSluzbyComponent},
  {path: 'aktualnesluzby', component: AktualneSluzbyComponent},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
