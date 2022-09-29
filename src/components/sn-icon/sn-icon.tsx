import { Component, Host, h } from '@stencil/core';
import twitter from './icons';

@Component({
  tag: 'sn-icon',
  styleUrl: 'sn-icon.css',
  shadow: false,
})
export class SnIcon {

  svg: SVGSVGElement;

  componentWillLoad() {
    console.log(this.svg)
  }

  connectedCallback() {
    console.log(this.svg)
  }


  render() {
    return (
      <Host>
        {this.svg}
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 248 204" ref={el => this.svg = el as SVGSVGElement} ></svg>

        </Host>
    );
  }

}
