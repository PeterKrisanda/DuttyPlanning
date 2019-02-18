import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';


import { TabMenuModule } from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ZoznamZamestnancovComponent } from './zoznam-zamestnancov/zoznam-zamestnancov.component';
import { VytvoritSluzbyComponent } from './vytvorit-sluzby/vytvorit-sluzby.component';
import { AktualneSluzbyComponent } from './aktualne-sluzby/aktualne-sluzby.component';
import { FooterComponent } from './footer/footer.component';
import { BrandbarComponent } from './brandbar/brandbar.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {FullCalendarModule} from 'primeng/fullcalendar';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ZoznamZamestnancovComponent,
    VytvoritSluzbyComponent,
    AktualneSluzbyComponent,
    FooterComponent,
    BrandbarComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    FullCalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
