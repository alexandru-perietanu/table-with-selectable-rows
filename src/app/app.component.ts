import { Component, ElementRef, ViewChild } from '@angular/core';
import { CheckBoxEvent } from './components/selectable-table/components/check-box/check-box-types';
import { TextCellComponent } from './components/selectable-table/components/text-cell/text-cell.component';
import { SelectableTableComponent } from './components/selectable-table/selectable-table.component';
import { TableColumnDefinition, TableSettings } from './components/selectable-table/table-types';
import { StatusCellComponent } from './components/status-cell/status-cell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('selectableTable') selectableTable?: SelectableTableComponent;

  title = 'table-with-selectable-rows';

  selectedRows: Set<number> = new Set<number>();

  tableSettings: TableSettings = {
    width: '1200px',
    selectable: true,
  };

  tableColumnDefinition: Array<TableColumnDefinition> = [
    {
      data: 'Name',
      field: 'name',
      headerComponent: TextCellComponent,
      rowComponent: TextCellComponent,
    },
    {
      data: 'Device',
      field: 'device',
      headerComponent: TextCellComponent,
      rowComponent: TextCellComponent,
    },
    {
      data: 'Path',
      field: 'path',
      headerComponent: TextCellComponent,
      rowComponent: TextCellComponent,
    },
    {
      data: 'Status',
      field: 'status',
      headerComponent: TextCellComponent,
      rowComponent: StatusCellComponent,
    },
  ];

  tableData = [
    {
      name: 'smss.exe',
      device: 'Stark',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
      status: 'scheduled',
    },

    {
      name: 'netsh.exe',
      device: 'Targaryen',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
      status: 'available',
    },

    {
      name: 'uxtheme.dll',
      device: 'Lannister',
      path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
      status: 'available',
    },

    {
      name: 'cryptbase.dll',
      device: 'Martell',
      path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
      status: 'scheduled',
    },

    {
      name: '7za.exe',
      device: 'Baratheon',
      path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
      status: 'scheduled',
    },
  ];

  constructor(private el: ElementRef) {}

  handleDownloadSelected(event: MouseEvent) {
    let data = '';
    for (let i = 0; i < this.tableData.length; i++) {
      if (
        this.selectedRows.has(i) &&
        this.tableData[i].status.toLocaleLowerCase() == 'available'
      ) {
        data += `${this.tableData[i].device}: ${this.tableData[i].path}\n`;
      }
    }
    if (data != '') {
      window.alert(data);
    } else {
      window.alert('No devices selected or selected devices are not available');
    }
  }

  handleCheckboxClick(event: MouseEvent) {
    if (this.selectedRows.size < this.tableData.length) {
      this.selectableTable?.selectAll();
    } else if (this.selectedRows.size == this.tableData.length) {
      this.selectableTable?.deselectAll();
    }
  }

  handleEmit(event: any) {
    if (event.type == 'CheckboxEvent') {
      this.handleTableSelect(event as CheckBoxEvent);
    }
    if (event.type == 'StatusEvent') {
      console.log(event);
    }
  }

  handleTableSelect(event: CheckBoxEvent) {
    let index = +event.name.split('-')[1];
    let value = event.value;

    if (value) {
      this.selectedRows.add(index);
    } else {
      this.selectedRows.delete(index);
    }

    this.isIntermediate();
    this.isChecked();
  }

  selectedText(): string {
    if (this.selectedRows.size == 0) {
      return 'None Selected';
    } else {
      return `Selected ${this.selectedRows.size}`;
    }
  }

  isIntermediate() {
    let checkBox = this.el.nativeElement.querySelector('#selectedItems');
    if (
      this.selectedRows.size == 0 ||
      this.selectedRows.size == this.tableData.length
    ) {
      checkBox.indeterminate = false;
    } else {
      checkBox.indeterminate = true;
    }
  }

  isChecked() {
    let checkBox = this.el.nativeElement.querySelector('#selectedItems');
    checkBox.checked = this.selectedRows.size == this.tableData.length;
  }
}
