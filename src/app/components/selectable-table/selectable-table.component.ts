import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'selectable-table',
  templateUrl: './selectable-table.component.html',
  styleUrls: ['./selectable-table.component.css']
})
export class SelectableTableComponent implements OnInit {

  @Input()
  data: any;

  @Input()
  columnDefinition: any;

  constructor() { }

  ngOnInit(): void {

  }

}
