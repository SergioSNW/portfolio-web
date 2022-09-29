import { newE2EPage } from '@stencil/core/testing';

describe('sn-color-h1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sn-color-h1></sn-color-h1>');

    const element = await page.find('sn-color-h1');
    expect(element).toHaveClass('hydrated');
  });
});
