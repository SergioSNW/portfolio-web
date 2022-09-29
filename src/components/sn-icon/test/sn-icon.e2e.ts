import { newE2EPage } from '@stencil/core/testing';

describe('sn-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sn-icon></sn-icon>');

    const element = await page.find('sn-icon');
    expect(element).toHaveClass('hydrated');
  });
});
