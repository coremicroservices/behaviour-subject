import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Student } from '../model/studentModel';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.scss']
})
export class OverViewComponent implements OnInit {
  student: Student;
  constructor(private commonService: CommonService) {

   }

  ngOnInit(): void {
    this.commonService.$behaviourSubject.subscribe((student: Student) =>{
     this.student = student; 
    });
  }

}
