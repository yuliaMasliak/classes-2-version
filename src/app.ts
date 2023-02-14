import { InputRange } from './InputRange';
import { OutputBlock } from './outputBlock';
import { RangeBlock } from './rangeBlock';
import { ResetButton } from './resetButton';
// import { Event } from './event';

export class App {
  html: HTMLElement;

  constructor(html: HTMLElement) {
    this.html = html;
  }

  start() {
    const inputs: InputRange[] = [];
    const output = document.createElement('div');
    output.classList.add('output');
    for (let i = 1; i < 4; i += 1) {
      const input: InputRange = new InputRange(i);
      inputs.push(input);
      const data = {
        id: input.createInput().id,
        value: input.createInput().value,
      };
      const outputBlock = new OutputBlock(`${data.id}`, `${data.value}`, output);
      outputBlock.renderContent();

      input.createInput().addEventListener('input', () => {
        data.id = input.createInput().id;
        data.value = input.createInput().value;
        outputBlock.updateData(data);
      });
    }

    // const eventClass = new Event(input.createInput(), input.createInput().value);
    // eventClass.onChange = (data) => {
    //   this.updateData(data);
    //   console.log(data);
    //   console.log(eventClass);
    // };

    const resetBtn = new ResetButton();
    const rangeBlock = new RangeBlock();
    const appBlock = document.createElement('div');
    appBlock.classList.add('app');
    appBlock.append(rangeBlock.renderRanges(inputs), output);
    this.html.append(appBlock, resetBtn.createBtn(inputs));
  }
}
