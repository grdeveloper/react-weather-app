export const tempEnums = Object.freeze({
    fahrenheit: 0,
    celsius: 1
});

export const initialState = {
    temp: tempEnums.fahrenheit,
    data: null,
    selectedDate: null,
    pageSize: 0,
    pageIndex: 0
};
