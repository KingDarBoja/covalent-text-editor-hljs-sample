import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covalent-editor-fu';

  sampleText = 'Hello World!';

  covalentEditorOpts: any = {
    lineWrapping: true,
    toolbar: false,
  };
}
