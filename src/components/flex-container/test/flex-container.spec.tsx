import { newSpecPage } from '@stencil/core/testing';
import { FlexContainer } from '../flex-container';

describe('flex-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FlexContainer],
      html: `<flex-container></flex-container>`,
    });
    expect(page.root).toEqualHtml(`
      <flex-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </flex-container>
    `);
  });
});
