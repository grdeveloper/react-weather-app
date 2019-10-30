import { createAction } from "../../../shared/utils";

describe('createAction helper', () => {
    it('should return simple object with type and payload', () => {
        // ASSIGN
        const type = '[WEATHER] Fetch weather success';
        const payload = {hot: true};
        const expectedResult = {type, payload};

        // ACT
        const result = createAction(type, payload);

        // ASSERT
        expect(result).to.be(expectedResult);
    });
});
