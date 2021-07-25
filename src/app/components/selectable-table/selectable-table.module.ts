import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { DynamicContentDirective } from './directives/dynamic-content.directive';
import { SelectableTableComponent } from './selectable-table.component';
import { TextCellComponent } from './components/text-cell/text-cell.component';
import { CellBaseComponent } from './components/cell-base/cell-base.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CheckBoxComponent,
    DynamicContentDirective,
    SelectableTableComponent,
    TextCellComponent,
    CellBaseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SelectableTableComponent
  ]
})
export class SelectableTableModule { }
