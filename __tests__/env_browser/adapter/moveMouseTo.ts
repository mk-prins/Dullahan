import {DullahanAdapter, AdapterError, DullahanErrorMessage, tryX} from "@k2g/dullahan";

declare const adapter: DullahanAdapter<never, never>;

describe('adapter.moveMouseTo', () => {

    it('throws a valid error when a browser has not been opened', async () => {
        try {
            expect.hasAssertions();
            await adapter.moveMouseTo(0, 0);
        } catch (error) {
            expect(error.message).toStrictEqual(DullahanErrorMessage.NO_BROWSER);
            expect(error.name).toStrictEqual(AdapterError.NAME);
        }
    });
});
