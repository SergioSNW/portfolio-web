import { newE2EPage } from '@stencil/core/testing';

describe('flex-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<flex-container></flex-container>');

    const element = await page.find('flex-container');
    expect(element).toHaveClass('hydrated');
  });
});
