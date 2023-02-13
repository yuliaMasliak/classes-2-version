export class Event {
  public onChange: (data: string) => void;

  constructor(button: HTMLElement, data: string) {
    button.onclick = () => {
      this.onChange?.(data);
    };
  }
}
