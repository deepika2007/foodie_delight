import axios from 'axios';
import './mockAdapter';

// fetch all restaurants 
export const fetch = async () => {
    const response = await axios.get('/api/restaurants');
    return response
};

// add new restaurants
export const add = async (payload) => {
    const response = await axios.post('/api/restaurants', payload);
    return response
};

// update restaurants
export const update = async (payload) => {
    const response = await axios.put(`/api/restaurants/${payload.id}`, payload);
    return response
};

// remove restaurants
export const remove = async (id) => {
    const response = await axios.delete(`/api/restaurants/${id}`);
    return response
};