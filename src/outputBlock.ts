import { IData } from './interfaces';

export class OutputBlock {
  output: HTMLElement;

  html: HTMLElement;

  value: string;

  id: string;

  data: IData;

  constructor(id: string, value: string, html: HTMLElement) {
    this.data = {
      id,
      value,
    };
    this.html = html;
  }

  renderContent(id: number, data: IData) {
    const output = document.createElement('div') as HTMLElement;
    output.classList.add('output-values');

    const outputValue = document.createElement('div') as HTMLElement;
    outputValue.setAttribute('id', `${id}-value`);

    outputValue.innerHTML = '';
    outputValue.innerHTML = `Range №${data.id} has value ${data.value}`;

    output.append(outputValue);

    this.html.append(output);
    return this.html as Node;
  }

  // updateData(data: IData) {
  //   return `Range №${data.id} has value ${data.value}`;
  // }
}
