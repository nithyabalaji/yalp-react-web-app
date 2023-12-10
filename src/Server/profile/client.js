// todo update external port url
// let PROFILE_API = process.env.PORT ? 'https://node-on-heroku-ingrid.herokuapp.com/api/profile': 'http://localhost:4000/api/profile'
const PROFILE_API = 'http://localhost:4000/api/profile';
let USER_API = 'http://localhost:4000/user'

export const getCurrentProfile = (dispatch) =>
    fetch(USER_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type:'get-current-profile',
                profile
            })
        );

export const updateCurrentProfile = (dispatch, profile) =>
    fetch(`${USER_API}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response =>
            dispatch({
                type: 'edit-profile',
                profile
            }));

export const updateProfile = (profile) =>
    fetch(`${URL}/${profile._id}`, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());



export default {
    updateCurrentProfile, getCurrentProfile,
    updateProfile
};

