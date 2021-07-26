import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextCellComponent } from './components/text-cell/text-cell.component';

import { SelectableTableComponent } from './selectable-table.component';
import { SelectableTableModule } from './selectable-table.module';
import { TableColumnDefinition } from './table-types';

let mockColumnDefinition: Array<TableColumnDefinition> = [
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

let mockTableData = [
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

let mockTableSettings = {
  width: '1200px',
  selectable: true,
};

describe('SelectableTableComponent', () => {
  let component: SelectableTableComponent;
  let fixture: ComponentFixture<SelectableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectableTableComponent],
      imports: [SelectableTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableTableComponent);
    component = fixture.componentInstance;
  });

  it('should populate table with correct number of rows and no rows should be selected', () => {
    component.tableSettings = mockTableSettings;
    component.columnDefinition = mockColumnDefinition;
    component.data = mockTableData;
    fixture.detectChanges();

    let tBody = fixture.debugElement.nativeElement.querySelector('tbody');
    let rowList = tBody.querySelectorAll('tr');
    let noSelected = 0;
    for (let i = 0; i < rowList.length; i++) {
      let row = rowList[i];
      if (row.classList.contains("selected")) {
        noSelected++;
      }
    }
    expect(noSelected).toEqual(0);
    expect(rowList.length).toEqual(mockTableData.length);
  });

  it('should should select all rows', () => {
    component.tableSettings = mockTableSettings;
    component.columnDefinition = mockColumnDefinition;
    component.data = mockTableData;
    fixture.detectChanges();
    component.selectAll();

    let tBody = fixture.debugElement.nativeElement.querySelector('tbody');
    let rowList = tBody.querySelectorAll('tr');
    let noSelected = 0;
    for (let i = 0; i < rowList.length; i++) {
      let row = rowList[i];
      if (row.classList.contains("selected")) {
        noSelected++;
      }
    }
    expect(noSelected).toEqual(rowList.length);
  });


  it('should should deselect all rows after selecting all rows', () => {
    component.tableSettings = mockTableSettings;
    component.columnDefinition = mockColumnDefinition;
    component.data = mockTableData;
    fixture.detectChanges();
    component.selectAll();
    component.deselectAll();

    let tBody = fixture.debugElement.nativeElement.querySelector('tbody');
    let rowList = tBody.querySelectorAll('tr');
    let noSelected = 0;
    for (let i = 0; i < rowList.length; i++) {
      let row = rowList[i];
      if (row.classList.contains("selected")) {
        noSelected++;
      }
    }
    expect(noSelected).toEqual(0);
  });
});
