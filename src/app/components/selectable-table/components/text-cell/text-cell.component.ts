import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDynamicContent } from 'src/app/components/dynamic-content';

@Component({
  selector: 'table-text-cell',
  templateUrl: './text-cell.component.html',
  styleUrls: ['./text-cell.component.css']
})
export class TextCellComponent implements OnInit, IDynamicContent {

  @Input()
  data!: string;
    
  @Output()
  emitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
