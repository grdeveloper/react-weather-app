export const fromKalvinToCelsius = 273.15;

export const convertKalvinToCelsius = (dates) =>
    (dates.reduce && dates.reduce((acc, init) => acc + init.temp / dates.length, 0)) || dates;
export const toCelsius = (dates) => (convertKalvinToCelsius(dates) - fromKalvinToCelsius).toFixed();
