import { Component, Host, h, Prop, Element, Watch } from '@stencil/core';

@Component({
  tag: 'flex-container',
  styleUrl: 'flex-container.css',
  shadow: true,
})
export class FlexContainer {

  @Element() el: HTMLElement;

  @Prop() isCol: boolean = false; // row(false) or column(true)
  @Prop() isReverse: boolean = false; // normal(false) or reverse(true)
  @Prop() isAligned: string = 'center' // align-items
  @Prop() isJustified: string = 'center' // Justify-items

  @Watch('isJustified')
  watchPropHandler2(newValue: string) {
    this.el.style
      .setProperty('--is-justified', newValue);
  }

  @Watch('isAligned')
  watchPropHandler(newValue: string) {
    this.el.style
      .setProperty('--is-aligned', newValue);
  }



  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
