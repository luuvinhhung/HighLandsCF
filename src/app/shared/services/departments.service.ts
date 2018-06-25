import { IDepartment } from './../../core/models/IDepartment';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DepartmentsService {
  private _departments: BehaviorSubject<Array<IDepartment>> = new BehaviorSubject(new Array());
  get departments() {
    return this._departments.asObservable();
  }
  constructor() { }
  getDepartments() {
    return this._departments.next(this.getDepartmentsFromServer());
  }
  private getDepartmentsFromServer() {
    return [
      { name: 'HighLands Hà Nội', address: '56 Trần Chánh Chiếu'},
      { name: 'HighLands TP.HCM', address: '56 Trần Chánh Chiếu'},
      { name: 'HighLands Đà Nẵng', address: '56 Trần Chánh Chiếu'},
      { name: 'HighLands Cần Thơ', address: '56 Trần Chánh Chiếu'},
      { name: 'HighLands Nam Định', address: '56 Trần Chánh Chiếu'},
      { name: 'HighLands Đà Lạt', address: '56 Trần Chánh Chiếu'},
    ];
  }
//   searchBook (keyword: string) {
//     const departments = this.getDepartmentsFromServer().filter(p => p.title.toLowerCase().includes(keyword.toLowerCase()));
//     this._departments.next(departments);
//   }
}

