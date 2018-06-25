import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private _opened: Boolean = false;
  private _docked: Boolean = true;
  private _mode: String = 'slide';
  private _dockedSize: String = '60px';
  constructor() { }

  ngOnInit() {
  }
  private _toggleSidebar() {
    this._opened = !this._opened;
    this._docked = !this._docked;
  }

}
