import { Component, ViewChild, DoCheck } from '@angular/core';

import { Options } from 'easymde';
import hljs from './highlight.config';
import { TdTextEditorComponent } from '@covalent/text-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  @ViewChild(TdTextEditorComponent, { static: false }) public TdTextEditor: TdTextEditorComponent;
  title = 'covalent-editor-fu';

  sampleText = 'Hello World!';

  covalentEditorOpts: Options = {
    lineWrapping: true,
    spellChecker: false,
    renderingConfig: {
      codeSyntaxHighlighting: true,
      hljs
    },
    theme: 'default'
  };

  ngDoCheck() {
    document.querySelectorAll('code').forEach((block) => {
      // will work once when the next line is uncommented
      // hljs.highlightBlock(block);
    });
  }
}
