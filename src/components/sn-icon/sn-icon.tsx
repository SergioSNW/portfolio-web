import { Component, Host, h, Element, Prop } from '@stencil/core';
import * as Icons from './icons/index.js';

@Component({
  tag: 'sn-icon',
  styleUrl: 'sn-icon.css',
  shadow: true,
})
export class SnIcon {

  @Element() el: HTMLElement;
  @Prop() icon: string = 'Twitter';
  @Prop() viewBox: string = '0 0 248 204';
  @Prop() appearance: string = 'light';

  componentWillLoad() {
    const svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgTag.innerHTML = (this.icon in Icons) ? Icons[this.icon].path : '';
    svgTag.setAttribute('viewBox',  (this.icon in Icons) ? Icons[this.icon].viewBox : '');
    svgTag.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    svgTag.classList.add(this.appearance);
    console.log(this.appearance);
    this.el.shadowRoot.appendChild(svgTag);
  }

  render() {
    return (
      <Host />
    );
  }

}
