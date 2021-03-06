import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-row',
  template: `
    <div class = "col-1"> {{index + 1}}</div>
    <div class = "col-2">{{ student.fullName }}</div>
    <div class = "col-3">{{ student.brithdate | date: 'dd.MM.yyyy' }}</div>
    <div class = "col-4"> {{ student.faculty }}</div>
    <div class="col-4 col-sm-3 col-md-2">
    <button type="button" class="btn btn-outline-primary">View</button>
  </div>
  `,
  styleUrls: ['./student-row.component.css']
})
export class StudentRowComponent implements OnInit {
  @Input() student: any;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
