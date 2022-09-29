import { newE2EPage } from '@stencil/core/testing';

describe('sn-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sn-button></sn-button>');

    const element = await page.find('sn-button');
    expect(element).toHaveClass('hydrated');
  });
});
