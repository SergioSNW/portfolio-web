import { newE2EPage } from '@stencil/core/testing';

describe('sn-social', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sn-social></sn-social>');

    const element = await page.find('sn-social');
    expect(element).toHaveClass('hydrated');
  });
});
