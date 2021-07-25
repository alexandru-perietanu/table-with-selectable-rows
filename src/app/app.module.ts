import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { SelectableTableModule } from './components/selectable-table/selectable-table.module';
import { StatusCellComponent } from './components/status-cell/status-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusCellComponent
  ],
  imports: [
    BrowserModule,
    
    SelectableTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
