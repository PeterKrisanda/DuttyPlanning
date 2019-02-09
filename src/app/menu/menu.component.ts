import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../node_modules/primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items=[
      {label:'Zoznam zamestnancov',routerLink: ['zoznamzamestnancov']},
      {label:'Vytvorit sluzby',routerLink: ['vytvoritsluzby']},
      {label:'Aktualne sluzby',routerLink: ['aktualnesluzby']},
      {label:'Pomoc',icon: 'fa fa-fw fa-question-circle',routerLink: ['home']}
    ];
  }

}
