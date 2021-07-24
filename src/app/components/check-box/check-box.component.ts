import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IDynamicContent } from '../dynamic-content';
import { CheckBoxData, CheckBoxEvent } from './check-box-types';

@Component({
  selector: 'table-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css'],
})
export class CheckBoxComponent implements OnInit, IDynamicContent {
  @Input()
  data: CheckBoxData = { name: '', label: '' };

  @Output()
  emitter: EventEmitter<any> = new EventEmitter<any>();

  isChecked = false;

  constructor() {}

  ngOnInit(): void {}

  checkValue(value: boolean) {
    //this.changeEvent.emit({ name: this.data.name, value: value });
    this.emitter.next({ name: this.data.name, value: value });
  }
}
