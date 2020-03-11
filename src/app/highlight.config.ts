import hljs from '@highlightjs/highlight.js/lib/core';
import javascript from '@highlightjs/highlight.js/lib/languages/javascript';
import typescript from '@highlightjs/highlight.js/lib/languages/javascript';
import python from '@highlightjs/highlight.js/lib/languages/python';
import r from '@highlightjs/highlight.js/lib/languages/r';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('r', r);

export default hljs;
