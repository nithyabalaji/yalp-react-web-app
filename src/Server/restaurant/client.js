const RESTAURANT_API = "http://localhost:4000/api/restaurants";

export const findRestaurantsByName = (name) =>
    fetch(`${RESTAURANT_API}/${name}`)
        .then(response => {console.log("fetch restaurant by name", response.json); return response.json()})

export const findRestaurantsByCity = (city) =>
    fetch(`${RESTAURANT_API}/${city}`)
        .then(response => response.json())

export const findRestaurantById = (id) =>
    fetch(`${RESTAURANT_API}/id/${id}`)
        .then(response => {console.log("fetch restaurant by name", response.json); return response.json()})

export const findRestaurantsByAuthor = (dispatch, author) =>
    fetch(`${RESTAURANT_API}/author/${author}`)
        .then(response => {console.log("fetch restaurant by author", response.json); return response.json()})
        .then(restaurants =>
        dispatch({
          type:"fetch-restaurants",
          restaurants
        }))

export const postRestaurant = (info) =>
    fetch(RESTAURANT_API,{
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'content-type': 'application/json'
      }
    })
        .then(res =>{console.log("post restaurant", res); return res.json()})
