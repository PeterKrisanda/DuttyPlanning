import { Component, OnInit } from '@angular/core';
import { Zamestnanci } from '../classes/zamestnanci';

@Component({
  selector: 'app-zoznam-zamestnancov',
  templateUrl: './zoznam-zamestnancov.component.html',
  styleUrls: ['./zoznam-zamestnancov.component.css']
})
export class ZoznamZamestnancovComponent implements OnInit {

  zamestnanci: Zamestnanci[];
  zamestnanecToEdit: Zamestnanci;
  zamestnanecToDelete: Zamestnanci;

  displayEditDialog: boolean;
  displayNewDialog: boolean;
  displayDeleteDialog: boolean;

  nameNewEmployee: string;
  dlhodoboPn: boolean;
  exceptionDays: string[] = [];
  selectedEmployeeException: string[] = [];

  nameEditEmployee: string;
  editDlhodoboPn: boolean;
  editExceptionDays: string[] = [];
  selectedEditEmployeeException: string[] = [];

  constructor() { }

  ngOnInit() {
    this.displayEditDialog = false;
    this.displayNewDialog = false;
    this.displayDeleteDialog = false;
    this.zamestnanecToEdit = new Zamestnanci();
    this.zamestnanecToDelete = new Zamestnanci();

    this.zamestnanci = [
      {id: 1, name: 'Krisandova'},
      {id: 2, name: 'Partillova'},
      {id: 3, name: 'Klecova'},
      {id: 4, name: 'Inasova'},
      {id: 5, name: 'Dugas'},
    ];
  }

  showEditDialog(zamestnanec: Zamestnanci){
    this.displayEditDialog = true;
    this.zamestnanecToEdit = zamestnanec;
  }

  showNewDialog(){
    this.displayNewDialog = true;
  }

  showDeleteDialog(zamestnanec: Zamestnanci){
    this.displayDeleteDialog = true;
    this.zamestnanecToDelete = zamestnanec;
  }

  closeDeleteDialog(){
    this.displayDeleteDialog = false;
    this.zamestnanecToDelete = new Zamestnanci();
  }

  editEmployee(){
    /*Implementation of edit employee later*/

    console.log("selected name: "+this.nameEditEmployee + "\n");
    console.log("selected partners: "+this.selectedEditEmployeeException + "\n");
    console.log("selected days: "+this.editExceptionDays + "\n");
    console.log(this.editDlhodoboPn);
    this.displayEditDialog = false;

  }

  createNewEmployee(){
    /*Implementation of create employee later*/

    console.log("selected name: "+this.nameNewEmployee + "\n");
    console.log("selected partners: "+this.selectedEmployeeException + "\n");
    console.log("selected days: "+this.exceptionDays + "\n");
    console.log(this.dlhodoboPn);
    this.displayNewDialog = false;
  }

  deleteZamestnanec(zamestnanec: Zamestnanci){
    /* Implementation of delete Employee from database. */
    this.closeDeleteDialog();
  }

}
