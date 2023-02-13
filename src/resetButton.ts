import { InputRange } from './inputRange';

export class ResetButton {
  createBtn(inputs: InputRange[]) {
    const ResetBtn = document.createElement('button');
    ResetBtn.classList.add('reset-btn');
    ResetBtn.innerHTML = 'Reset';

    ResetBtn.addEventListener('click', () => {
      inputs.forEach((input) => {
        input.resetOutputValues();
        input.el.dispatchEvent(new Event('input'));
      });
    });

    return ResetBtn as HTMLElement;
  }
}
