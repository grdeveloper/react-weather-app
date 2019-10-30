import {
    convertKalvinToCelsius,
    toCelsius
} from "../../../shared/utils";

describe('helpers toCelsius', () => {
    const mockedDate = [{temp: 305}, {temp: 311}];
    const mockedTemp = 283;

    it('should calculate the average temperature from the given array', () => {
        // ASSIGN
        const expectedResult = 308; // (305 + 311) / 2

        // ACT
        const result = convertKalvinToCelsius(mockedDate);

        // ASSERT
        expect(result).to.be(expectedResult);
    });

    it('should return the temperature value if single day instead of days provided', () => {
        // ASSIGN
        const expectedResult = 283;

        // ACT
        const result = convertKalvinToCelsius(mockedTemp);

        // ASSERT
        expect(result).to.be(expectedResult);
    });

    it('should covert the initial temperature value of the given array to celsius one', () => {
        // ASSIGN
        const expectedResult = 34; // initial value - 273.15

        // ACT
        const result = toCelsius(mockedDate);

        // ASSERT
        expect(result).to.be(expectedResult);
    });
});