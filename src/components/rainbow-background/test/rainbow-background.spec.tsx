import { newSpecPage } from '@stencil/core/testing';
import { RainbowBackground } from '../rainbow-background';

describe('rainbow-background', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RainbowBackground],
      html: `<rainbow-background></rainbow-background>`,
    });
    expect(page.root).toEqualHtml(`
      <rainbow-background>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rainbow-background>
    `);
  });
});
