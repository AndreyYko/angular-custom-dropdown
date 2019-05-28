import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { CaretComponent } from './components/drop-down/caret/caret.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    CaretComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
