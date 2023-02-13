export class InputRange {
  el: HTMLInputElement;

  id: number;

  constructor(id: number) {
    this.el = document.createElement('input') as HTMLInputElement;
    this.el.classList.add('range');
    this.el.setAttribute('type', 'range');
    this.el.setAttribute('min', '0');
    this.el.setAttribute('max', '100');
    this.el.setAttribute('id', `${id}`);
    this.el.setAttribute('value', `${this.defaultValue}`);
  }

  public defaultValue = 30;

  createInput() {
    return this.el as HTMLInputElement;
  }

  createOutputValues() {
    const outputValue = document.createElement('div') as HTMLElement;
    outputValue.innerHTML = this.getRangeValue();
    this.el.addEventListener('input', () => {
      outputValue.innerHTML = this.getRangeValue();
    });
    return outputValue as HTMLElement;
  }

  getRangeValue() {
    return `Range №${this.el.id} has value ${this.el.value}`;
  }

  resetOutputValues() {
    this.el.valueAsNumber = 0;
    this.createOutputValues();
  }
}
