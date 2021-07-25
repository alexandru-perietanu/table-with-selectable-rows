import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  Type,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { CellBaseComponent } from './components/cell-base/cell-base.component';
import {
  CheckBoxData,
  CheckBoxEvent,
} from './components/check-box/check-box-types';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { TableSettings } from './table-types';

@Component({
  selector: 'selectable-table',
  templateUrl: './selectable-table.component.html',
  styleUrls: ['./selectable-table.component.css'],
})
export class SelectableTableComponent implements OnInit {
  @ViewChildren('checkboxes') checkboxes?: QueryList<CellBaseComponent>;

  @Input()
  data: any;

  @Input()
  columnDefinition: any;

  @Input()
  tableSettings: TableSettings = {
    width: '600px',
    selectable: false,
  };

  checkBoxData: Array<CheckBoxData> = [];

  @Output()
  emitter = new EventEmitter<any>();

  checkBox: Type<CheckBoxComponent> = CheckBoxComponent;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  handleSelect(event: CheckBoxEvent) {
    let name = event.name;
    let value = event.value;

    let row = this.el.nativeElement.querySelector(`.${name}`);
    if (value) {
      this.renderer.addClass(row, 'selected');
    } else {
      this.renderer.removeClass(row, 'selected');
    }

    this.emitter.emit(event);
  }

  ngOnInit(): void {
    if (this.tableSettings.selectable) {
      for (let i = 0; i < this.data.length; i++) {
        this.checkBoxData.push({
          name: `row-${i}`,
          isChecked: false,
        });
      }
    }
  }

  public selectAll() {
    this.forceCheckBoxesToValue(true);
  }

  public deselectAll() {
    this.forceCheckBoxesToValue(false);
  }

  private forceCheckBoxesToValue(value: boolean) {
    let checkboxesArray = this.checkboxes?.toArray();
    if (checkboxesArray && checkboxesArray.length) {
      for (let i = 0; i < checkboxesArray.length; i++) {
        checkboxesArray[i].componentRef.instance.data.isChecked = value;
        checkboxesArray[i].componentRef.instance.checkValue(value);
      }
    }
  }
}
