import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rainbow-background',
  styleUrl: 'rainbow-background.css',
  shadow: true,
})
export class RainbowBackground {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
