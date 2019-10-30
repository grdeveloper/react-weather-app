import { select } from "../../../shared/utils";

describe('select helper', () => {
    it('should select and slice only the date from the ISO date', () => {
        // ASSIGN
        const DateISO = [{date: '2019-10-30T00:00:13.803Z'}];
        const expectedResult = '2019-10-30';

        // ACT
        const result = select(DateISO);

        // ASSERT
        expect(result).to.be(expectedResult);
    });
});
