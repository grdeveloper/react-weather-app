export const dateFormat = 10;

export const handleResponse = (state, response) => {
    const data = [];
    const dates = [];

    response.data.list.forEach(weather => {
        const date = weather.dt_txt.slice(0, dateFormat);

        if (!~dates.indexOf(date)) {
            dates.push(date);
            data.push([]);
        }

        data[data.length - 1].push(
            {
                date: weather.dt_txt,
                temp: weather.main.temp
            }
        );
    });

    return {
        ...state,
        data,
    };
};