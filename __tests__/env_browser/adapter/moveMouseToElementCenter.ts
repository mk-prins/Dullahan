import {AdapterError, DullahanAdapter, DullahanErrorMessage, tryX} from "@k2g/dullahan";

declare const adapter: DullahanAdapter<never, never>;

describe('adapter.moveMouseToElementCenter', () => {

    it('throws a valid error when a browser has not been opened', async () => {
        try {
            expect.hasAssertions();
            await adapter.moveMouseToElementCenter('#dullahan', 0, 0);
        } catch (error) {
            expect(error.message).toStrictEqual(DullahanErrorMessage.NO_BROWSER);
            expect(error.name).toStrictEqual(AdapterError.NAME);
        }
    });

    it('throws a valid error when an element cannot be found', async () => {
        try {
            expect.hasAssertions();
            await tryX(3, () => adapter.openBrowser());
            await adapter.setURL('http://localhost:8080', {
                timeout: 10000,
                readyState: 'interactive'
            });
            await adapter.moveMouseToElementCenter('#dullahan', 0, 0);
        } catch (error) {
            expect(error.message).toMatchSnapshot();
            expect(error.name).toStrictEqual(AdapterError.NAME);
        }
    });
});
