import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sn-button',
  styleUrl: 'sn-button.css',
  shadow: true,
})
export class SnButton {

  @Prop() text: string;
  @Prop() appearance: string;


  render() {
    return (
        /*POR PUTO FIN*/
        <button class={`btn ${this.appearance}`} type="button">
          {/* Slot */}
          {this.text}

        </button>

      );
     }

}
