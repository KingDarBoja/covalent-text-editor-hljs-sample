import { Component } from '@angular/core';

import { Options } from 'easymde';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covalent-editor-fu';

  sampleText = 'Hello World!';

  covalentEditorOpts: Options = {
    lineWrapping: true,
    showIcons: ['code', 'table'],
    toolbar: true,
  };
}
