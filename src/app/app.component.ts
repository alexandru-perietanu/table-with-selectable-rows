import { Component } from '@angular/core';
import {
  CheckBoxData,
  CheckBoxEvent,
} from './components/check-box/check-box-types';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { TextCellComponent } from './components/selectable-table/components/text-cell/text-cell.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'table-with-selectable-rows';

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
      rowComponent: TextCellComponent,
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

  dynamicComp = CheckBoxComponent;
  checkBoxData: CheckBoxData = { name: 'test' };

  handleChange(event: CheckBoxEvent) {
    console.log(event);
  }

  handleEmit(event: any) {
    console.log('!!!!!!!!!!!! ', event);
  }
}
