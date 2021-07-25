import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { IDynamicContent } from '../../interfaces/dynamic-content';
import { CheckBoxData } from './check-box-types';

@Component({
  selector: 'table-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit, IDynamicContent {
  
  @ViewChild("checkbox") checkbox?: ElementRef;

  @Input()
  data: CheckBoxData = { name: '', label: '', isChecked: false};

  @Output()
  emitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    
  }

  checkValue(value: boolean) {
    this.emitter.next({
      type: 'CheckboxEvent',
      name: this.data.name,
      value: value,
    });
  }
}
