import { newE2EPage } from '@stencil/core/testing';

describe('rainbow-background', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rainbow-background></rainbow-background>');

    const element = await page.find('rainbow-background');
    expect(element).toHaveClass('hydrated');
  });
});
