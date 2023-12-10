//require('dotenv').config()
const axios = require("axios").default;

export const fetchRestaurants = (lat, lng) =>
    fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${lng}&limit=30&currency=USD&distance=2&lunit=km&lang=en_US`,
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key": "d5e50a5d13msh18e87c095b5740cp19cff1jsna6405b505319"
            }
        })
        .then(response => response.json())
        .then(data => data.data)



let options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/get-details',
    params: { location_id: '293919', currency: 'USD', lang: 'en_US' },
    headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'd5e50a5d13msh18e87c095b5740cp19cff1jsna6405b505319'
    }
};

export const fetchDetails = (id) => {
    async function axiosTest() {
        options.params.location_id = id;
        const response = await axios.request(options);
        return response.data;
    }
    return axiosTest();
};