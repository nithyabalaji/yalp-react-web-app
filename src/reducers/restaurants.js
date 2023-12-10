const restaurants = (state = [], action) => {
    switch (action.type){
      case "fetch-restaurants":
        console.log("reducer fetch restaurant", action.restaurants)
        return action.restaurants
      default:
        return state
    }
}
  
export default restaurants;