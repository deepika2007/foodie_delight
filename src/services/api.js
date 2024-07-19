import axios from 'axios';
import './mockAdapter';

// fetch all restaurants 
export const fetch = async () => {
    try {
        const response = await axios.get('/api/restaurants');
        return response
    } catch (err) {
        return false
    }
};

// fetch data by id restaurants 
export const fetchById = async (id) => {
    try {
        const response = await axios.get(`/api/restaurants/${id}`);
        return response
    } catch (err) {
        return false
    }
};

// add new restaurants
export const add = async (payload) => {
    try {
        const response = await axios.post('/api/restaurants', payload);
        return response
    } catch (err) {
        return false
    }
};

// update restaurants
export const update = async (payload) => {
    try {
        const response = await axios.put(`/api/restaurants/${payload.id}`, payload);
        return response
    } catch (err) {
        return false
    }
};

// remove restaurants
export const remove = async (id) => {
    try {
        const response = await axios.delete(`/api/restaurants/${id}`);
        return response
    } catch (err) {
        return false
    }
};