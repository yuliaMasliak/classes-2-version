import { IData } from './interfaces';

export class OutputBlock {
  output: HTMLElement;

  html: HTMLElement;

  value: string;

  id: string;

  data: IData;

  startValue: string;

  constructor(id: string, value: string, html: HTMLElement) {
    this.output = document.createElement('div') as HTMLElement;
    this.output.classList.add('output-value');
    this.data = {
      id,
      value,
    };
    this.html = html;
    this.startValue = `Range №${this.data.id} has value ${this.data.value}`;
  }

  renderContent() {
    this.output.innerHTML = this.startValue;
    this.html.append(this.output);
    return this.html as Node;
  }

  updateData(data: IData) {
    this.startValue = `Range №${data.id} has value ${data.value}`;

    this.renderContent();
  }
}
