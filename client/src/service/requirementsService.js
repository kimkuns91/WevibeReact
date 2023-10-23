import axios from 'axios';
import baseUrl from './apiConfig';

export const requirementsCompleted = (requirements) => {
    return axios.post(`${baseUrl}/requirements`, {
      requirements
    });
};