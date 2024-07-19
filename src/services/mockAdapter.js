import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// Initialize restaurants data
let restaurants = [];

// mock api for add restaurant 
mock.onPost('/api/restaurants').reply(config => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const newRestaurants = JSON.parse(config.data);
    newRestaurants.id = Date.now();
    newRestaurants.imageNumber = randomNumber
    restaurants.push(newRestaurants);
    return [200, restaurants];
});

// mock api for update restaurant
mock.onPut(new RegExp('/api/restaurants/*')).reply(config => {
    const newRestaurants = JSON.parse(config.data);
    const index = restaurants.findIndex(restaurant => restaurant.id === newRestaurants.id);
    restaurants[index] = newRestaurants;
    return [200, restaurants];
});

// mock api for get restaurant
mock.onGet('/api/restaurants').reply(200, restaurants);

// mock api for get restaurant by ID
mock.onGet(new RegExp('/api/restaurants/*')).reply(config => {
    const id = parseInt(config.url.split('/').pop());
    const restaurant = restaurants.find(restaurant => restaurant?.id === id);
    if (restaurant) {
        return [200, restaurant];
    } else {
        return [400, { message: 'Restaurant not found' }];
    }
});

// mock api for update restaurant
mock.onDelete(new RegExp('/api/restaurants/*')).reply(config => {
    const id = parseInt(config.url.split('/').pop());
    const index = restaurants.findIndex(restaurant => restaurant.id === id);
    if (index !== -1) {
        restaurants.splice(index, 1);
        return [200, { message: 'Restaurant deleted' }];
    } else {
        return [404, { message: 'Restaurant not found' }];
    }
});
