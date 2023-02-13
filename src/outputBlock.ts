import { InputRange } from './InputRange';
import { RangeBlock } from './rangeBlock';
import { ResetButton } from './resetButton';
import { Event } from './event';

export class OutputBlock extends RangeBlock {
  renderContent(): string | Node {
    const inputs: InputRange[] = [];

    for (let i = 1; i < 4; i += 1) {
      const input: InputRange = new InputRange(i);
      inputs.push(input);

      const eventClass = new Event(input.createInput(), input.createInput().value);
      eventClass.onChange = (data) => {
        this.updateData(data);
        console.log(data);
      };
    }
    const resetBtn = new ResetButton();
    this.renderRanges(inputs);

    const output = document.createElement('div') as HTMLElement;
    output.classList.add('output');
    const outputValuesBlock = document.createElement('div') as HTMLElement;
    outputValuesBlock.classList.add('output-block');
    inputs.forEach((input) => {
      outputValuesBlock.append(input.createOutputValues());
    });
    const appBlock = document.createElement('div');
    appBlock.classList.add('app');
    output.append(this.renderRanges(inputs), outputValuesBlock);
    appBlock.append(output, resetBtn.createBtn(inputs));
    return appBlock as Node;
  }

  updateData(data: string) {
    console.log(data);
  }
}
