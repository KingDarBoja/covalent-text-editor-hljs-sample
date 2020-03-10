import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CovalentTextEditorModule } from '@covalent/text-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CovalentTextEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
