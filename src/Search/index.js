import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navigation from '../Navigation';
import { FiSearch } from "react-icons/fi"
import { setKey, setLanguage, fromAddress } from "react-geocode";
import { fetchRestaurants } from "../Server/api/client";
import { findRestaurantsByName } from "../Server/restaurant/client";
import RestaurantItem from "./RestaurantItem";

const Search = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [input, setInput] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    setKey(`AIzaSyDyXqj9Dgfj9AHauh7XrA86bz3NdocO71M`);
    setLanguage("en");

    const fetchRemoteRestaurantsHandler = () => {
        fromAddress(input).then(
            (response) => {
                console.log(response);
                const { lat, lng } = response.results[0].geometry.location;
                console.log("address to geo", lat, lng);
                setErrMsg("");
                fetchRestaurants(lat, lng)
                    .then(data => { console.log("fetch", data); return setRestaurants(data) })
                    .catch(() => { setErrMsg("Invalid address"); setRestaurants([]) })
            }
        ).catch(() => { setErrMsg("Invalid address"); setRestaurants([]) })

    }

    const fetchRestaurantsHandler = () => {
        findRestaurantsByName(input)
            .then(restaurants => setRestaurants(restaurants))
            .catch(() => { setErrMsg("Provided address is not valid"); setRestaurants([]) })
    }

    console.log(restaurants)
    return (
        <div>
            <Navigation active="search" />
            <div className="flex-col-container">
                <div className="d-flex flex-column justify-content-center bg-light-purple">
                    <div className="card-text d-flex flex-column align-items-center font-20px">
                        <div className="card-title">
                            {/*When screen < md*/}
                            <h1
                                className="d-none d-md-block purple font-80px text-center font-bold font-shadow font-stroke-black-2px">
                                Search Restaurants
                            </h1>
                            {/*When screen >= md*/}
                            <h1
                                className="d-block d-md-none purple font-50px text-center font-bold font-shadow">
                                Search Restaurants
                            </h1>
                        </div>
                        <div
                            className="input-group d-flex align-items-center rounded-border-30px border search-box">
                            <FiSearch className="ms-4" />
                            <input
                                placeholder="Search"
                                className="form-control bg-transparent border-0"
                                onChange={(event) => setInput(event.target.value)} />
                        </div>
                        <div>
                            <button className="btn btn-primary purple m-4 btn-block" onClick={fetchRemoteRestaurantsHandler}>Search through the Remote Api</button>
                            <button className="btn btn-primary purple m-4 btn-block" onClick={fetchRestaurantsHandler}>Search in our Database</button>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <div className='m-3'>
                    <h1 className="mt-4 purple">Results</h1>
                    {errMsg &&
                        <h5 className="alert alert-danger">{errMsg}</h5>}
                    {restaurants && restaurants.length != 0 &&
                        <ul className="list-group">
                        {
                            restaurants.map(restaurant => {
                                if (restaurant && restaurant.name)
                                    return (
                                        <RestaurantItem restaurant={restaurant} />
                                    )
                            })
                        }
                    </ul>
                    }
                    {(!restaurants || (restaurants.length == 0)) &&
                        <h6>No results</h6>
                    }
                    {/* <ul className="list-group">
                        {
                            restaurants.map(restaurant => {
                                if (restaurant && restaurant.name)
                                    return (
                                        <RestaurantItem restaurant={restaurant} />
                                    )
                            })
                        }
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default Search;