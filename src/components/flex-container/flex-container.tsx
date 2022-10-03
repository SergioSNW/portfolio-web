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
  @Prop() isPositioned: string = 'relative' // relative / absolut / fixed // NOT USED
  @Prop() size: string = 'large' // large = 64px // NOT USED
  @Prop() gapSize: string = '1px' //

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

  @Watch('gapSize')
  watchPropHandler3(newValue: string) {
    this.el.style
      .setProperty('gap', newValue);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
