import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { ContainerComponent } from './components/container/container.component';
import { DynamicContentDirective } from './components/directives/dynamic-content.directive';
import { SelectableTableComponent } from './components/selectable-table/selectable-table.component';
import { TextCellComponent } from './components/selectable-table/components/text-cell/text-cell.component';
import { CellBaseComponent } from './components/selectable-table/components/cell-base/cell-base.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    ContainerComponent,
    DynamicContentDirective,
    SelectableTableComponent,
    TextCellComponent,
    CellBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
