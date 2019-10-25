export const fromKalvinToFahrenheit = 273.15;

export const convertKalvinToFahrenheit = (dates) =>
    (dates.reduce && dates.reduce((acc, init) => acc + init.temp / dates.length, 0)) || dates;
export const toFahrenheit = (dates) => ((convertKalvinToFahrenheit(dates) - fromKalvinToFahrenheit) * 9/5 + 32).toFixed();