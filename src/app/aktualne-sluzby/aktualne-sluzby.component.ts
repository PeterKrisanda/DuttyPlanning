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
                "title": "All Day Event",
                "start": "2019-03-02"
            },
            {
                "title": "Long Event",
                "start": "2016-01-07",
                "end": "2016-01-10"
            },
            {
                "title": "Repeating Event",
                "start": "2016-01-09T16:00:00"
            },
            {
                "title": "Repeating Event",
                "start": "2016-01-16T16:00:00"
            },
            {
                "title": "Conference",
                "start": "2016-01-11",
                "end": "2016-01-13"
            }
        ];

    this.options = {
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'myMonth',
            weekends: false,
            dayCount: 5
        },
        views: {
          myMonth: {
            weekends: false,
            dayCount: 5
          }
        }
    };



  }

}
