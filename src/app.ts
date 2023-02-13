import { OutputBlock } from './outputBlock';

export class App {
  html: HTMLElement;

  constructor(html: HTMLElement) {
    this.html = html;
  }

  start() {
    const outputBlock = new OutputBlock();

    this.html.append(outputBlock.renderContent());
  }
}

export default App;
