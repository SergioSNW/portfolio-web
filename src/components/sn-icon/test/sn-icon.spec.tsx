import { newSpecPage } from '@stencil/core/testing';
import { SnIcon } from '../sn-icon';

describe('sn-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SnIcon],
      html: `<sn-icon></sn-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <sn-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sn-icon>
    `);
  });
});
