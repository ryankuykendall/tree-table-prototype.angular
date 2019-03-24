import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TreeChecklistExample } from './tree-table/tree-checklist-example';

@NgModule({
  declarations: [
    TreeChecklistExample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [TreeChecklistExample]
})
export class AppModule { }
