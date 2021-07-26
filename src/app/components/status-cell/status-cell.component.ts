import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDynamicContent } from '../selectable-table/interfaces/dynamic-content';


@Component({
  selector: 'table-status-cell',
  templateUrl: './status-cell.component.html',
  styleUrls: ['./status-cell.component.css']
})
export class StatusCellComponent implements OnInit, IDynamicContent {

  @Input()
  data: string = "";
    
  @Output()
  emitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: MouseEvent) {
    this.emitter.next({
      type: 'StatusEvent',
      name: this.data,
    });
  }

}
