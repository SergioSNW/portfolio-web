import { newSpecPage } from '@stencil/core/testing';
import { SnButton } from '../sn-button';

describe('sn-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SnButton],
      html: `<sn-button></sn-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sn-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sn-button>
    `);
  });
});
