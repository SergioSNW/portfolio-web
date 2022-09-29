import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'sn-color-h1',
  styleUrl: 'sn-color-h1.css',
  shadow: true,
})
export class SnColorH1 {

  @Prop() start: string;
  @Prop() stop: string;

  render() {
    return (

        <slot/>

    );
  }

}
