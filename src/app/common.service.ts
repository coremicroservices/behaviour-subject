import { Student } from './model/studentModel';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  student: Student = new Student();
  $behaviourSubject = new BehaviorSubject(this.student);

  constructor() { }

  multicast(student: Student) {
    console.log(student);
    this.$behaviourSubject.next(student);
  }

}
