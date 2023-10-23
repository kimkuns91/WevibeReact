import axios from 'axios';
import baseUrl from './apiConfig';

export const postEmail = ({
        name,
        company,
        phone,
        email,
        products
    }) => {
    return axios.post(`${baseUrl}/email`, {
        name,
        company,
        phone,
        email,
        products
    });
};