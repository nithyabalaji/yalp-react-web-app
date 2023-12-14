import axios from 'axios';

export const fetchRestaurants = (lat, lng) =>
  fetch(
    `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${lng}&limit=30&currency=USD&distance=2&lunit=km&lang=en_US`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "a69e55f2e1mshf1c74632750b2c9p1bc54ejsn6027f73bbf4c",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.data);

let options = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/restaurants/get-details",
  params: { location_id: "293919", currency: "USD", lang: "en_US" },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "a69e55f2e1mshf1c74632750b2c9p1bc54ejsn6027f73bbf4c",
  },
};

export const fetchDetails = async (id) => {
    try {
      options.params.location_id = id;
      const response = await axios(options);
      return response.data;
    } catch (error) {
      console.error('Error in fetchDetails:', error.message);
      //throw error; // Rethrow the error for further handling if needed
    }
  };