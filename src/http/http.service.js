import * as axios from "axios";

import http from '../config/weather.config';

export const axiosInstance = axios.create({
    baseURL: http.weatherEndPoint
});