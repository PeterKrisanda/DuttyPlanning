import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aktualne-sluzby',
  templateUrl: './aktualne-sluzby.component.html',
  styleUrls: ['./aktualne-sluzby.component.css']
})
export class AktualneSluzbyComponent implements OnInit {

  events: any[];
  options: any;
  constructor() { }

  ngOnInit() {
    this.events = [
            {
                "title": "Krisandova",
                "start": "2019-03-01"
            },
            {
                "title": "Partillova",
                "start": "2019-03-07",
            },
            {
                "title": "Klecova",
                "start": "2019-03-13"
            },
            {
                "title": "Inasova",
                "start": "2019-03-18"
            },
            {
                "title": "Dugas",
                "start": "2019-03-18"
            }
        ];

    this.options = {
        header: {
            left: 'title',
            center: '',
            right: 'prev,next',
        },
        weekends: false,
    };



  }

}
