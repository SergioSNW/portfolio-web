import { newSpecPage } from '@stencil/core/testing';
import { SnColorH1 } from '../sn-color-h1';

describe('sn-color-h1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SnColorH1],
      html: `<sn-color-h1></sn-color-h1>`,
    });
    expect(page.root).toEqualHtml(`
      <sn-color-h1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sn-color-h1>
    `);
  });
});
