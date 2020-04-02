import { Student } from './model/studentModel';
import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Core Micro Services -BehaviorSubject';
  student = new Student();
  constructor(private commonService: CommonService) {

  }
  ngOnInit(): void {

  }

  multiCast() {
    this.commonService.multicast(this.student);
  }
}
