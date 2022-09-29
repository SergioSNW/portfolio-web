import { newSpecPage } from '@stencil/core/testing';
import { SnSocial } from '../sn-social';

describe('sn-social', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SnSocial],
      html: `<sn-social></sn-social>`,
    });
    expect(page.root).toEqualHtml(`
      <sn-social>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sn-social>
    `);
  });
});
