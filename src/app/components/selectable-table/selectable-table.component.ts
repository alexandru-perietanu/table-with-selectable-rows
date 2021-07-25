import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, Type } from '@angular/core';
import { CheckBoxEvent } from './components/check-box/check-box-types';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { TableSettings } from './table-types';

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

  @Input() 
  tableSettings: TableSettings = {
    width: "600px", 
    selectable: false
  }

  @Output()
  emitter = new EventEmitter<any>();

  checkBox: Type<CheckBoxComponent> = CheckBoxComponent;

  handleSelect(event: CheckBoxEvent) {
    let name = event.name;
    let value = event.value;
    
    let row = this.el.nativeElement.querySelector(`.${name}`);
    if (value) {
      this.renderer.addClass(row, "selected");
    } else {
      this.renderer.removeClass(row, "selected");
    }

    this.emitter.emit(event);
    
  }

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {

  }

}
