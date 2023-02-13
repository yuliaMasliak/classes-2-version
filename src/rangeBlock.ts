import { InputRange } from './inputRange';

export class RangeBlock {
  renderRanges(inputs: InputRange[]): string | Node {
    const drawRangeBlock: HTMLElement = document.createElement('div') as HTMLElement;
    drawRangeBlock.classList.add('range-block');
    inputs.forEach((input) => {
      drawRangeBlock.append(input.createInput());
    });

    return drawRangeBlock as HTMLElement;
  }
}
