import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CovalentTextEditorModule } from '@covalent/text-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CovalentTextEditorModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
