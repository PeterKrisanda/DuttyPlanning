import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { PublicHoliday } from '../classes/publicHoliday';
import { Vacation } from '../classes/vacations';
import { Zamestnanci } from '../classes/zamestnanci';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vytvorit-sluzby',
  templateUrl: './vytvorit-sluzby.component.html',
  styleUrls: ['./vytvorit-sluzby.component.css']
})
export class VytvoritSluzbyComponent implements OnInit {

  mounths: SelectItem[];
  selectedMounth: SelectItem;
  selectedZamestnanci: SelectItem[];
  numHolidaysFields: number;
  publicHolidays: PublicHoliday[];
  vacations: Vacation[];
  visibleMultiVacation: boolean[];
  zamestnanci: Zamestnanci[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.numHolidaysFields = 0;
    this.publicHolidays = [];
    this.vacations = [];
    this.visibleMultiVacation=[];
    this.selectedZamestnanci=[];

    this.mounths = [
      {label:'Januar',value:'Januar'},
      {label:'Februar',value:'Februar'},
      {label:'Marec',value:'Marec'},
      {label:'April',value:'April'},
      {label:'Maj',value:'Maj'},
      {label:'Jun',value:'Jun'},
      {label:'Jul',value:'Jul'},
      {label:'August',value:'August'},
      {label:'September',value:'September'},
      {label:'Oktober',value:'Oktober'},
      {label:'November',value:'November'},
      {label:'December',value:'December'}
    ];

    this.zamestnanci = [
      {id: 1, name: 'Krisandova'},
      {id: 2, name: 'Partillova'},
      {id: 3, name: 'Klecova'},
      {id: 4, name: 'Inasova'},
      {id: 5, name: 'Dugas'},
    ];

  }

  addHolidayField(){
    this.numHolidaysFields++;
    let contact = new PublicHoliday();
    contact.id = this.numHolidaysFields;
    contact.date = 'default';
    console.log(contact);
    this.publicHolidays.push(contact);
    console.log(this.publicHolidays);
  }

  removeHolidayField(){
    if(this.numHolidaysFields > 0){
      this.publicHolidays.splice(this.numHolidaysFields-1, 1);
      this.numHolidaysFields--;
    }
  }

  addVacationField(){
    this.visibleMultiVacation.push(false);
    let contact = new Vacation();
    this.vacations.push(contact);
  }

  addVacationMultiField(){
    this.visibleMultiVacation.push(true);
    let contact = new Vacation();
    this.vacations.push(contact);
  }

  deleteSelectedZamestnanec(index: number){
    this.vacations.splice(index, 1);
    this.selectedZamestnanci.splice(index, 1);
    this.visibleMultiVacation.splice(index, 1);
    console.log();
  }


  save(){
    for(let publicHoliday of this.publicHolidays){
      //console.log((<HTMLInputElement>document.getElementById('holiday='+publicHoliday.id.toString())).value);
      this.publicHolidays[publicHoliday.id-1].date = (<HTMLInputElement>document.getElementById('holiday='+publicHoliday.id.toString())).value;
    }

    /* ulozenie do db vsetkeho vyplneneho a popripade aj logika generovanie mozno*/

    console.log("First");
    console.log(this.selectedZamestnanci);
    console.log(this.visibleMultiVacation);
    this.router.navigate(['/aktualnesluzby']);
  }
















}
