import { Component } from '@angular/core';
import { CheckBoxEvent } from './components/selectable-table/components/check-box/check-box-types';
import { TextCellComponent } from './components/selectable-table/components/text-cell/text-cell.component';
import { TableSettings } from './components/selectable-table/table-types';
import { StatusCellComponent } from './components/status-cell/status-cell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'table-with-selectable-rows';

  selectedRows: Set<number> = new Set<number>();

  tableSettings: TableSettings = {
    width: '1200px',
    selectable: true,
  };

  tableColumnDefinition = [
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

  handleEmit(event: any) {
    if (event.type == 'CheckboxEvent') {
      this.handleTableSelect(event as CheckBoxEvent);
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
    
    console.log(this.selectedRows);

  }
}
