describe('Google và WebdriverIO - switchWindow demo', () => {
    it('demo', async () => {
        browser.url('https://www.google.com');
        await browser.pause(1000);
    });
});
