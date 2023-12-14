import axios from "axios";
const request = axios.create({
    withCredentials: true,
});
export const BASE_API = 'http://localhost:4000'// process.env.REACT_APP_API_BASE;

export const findCurrentUser = async () => {
    const response = await request.get(`${BASE_API}/user`);
    return response.data;
};

export const userRegister = (info) =>
    fetch(`${BASE_API}/register`, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(response => { console.log(response); return response.json() })

export const userLogin = async (dispatch, info) =>
    fetch(`${BASE_API}/login`, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'content-type': 'application/json',
        }
    }).then(response => { console.log("userLogin", response.json); return response.json() })
        .then(user => dispatch({
            type: "user-login",
            user
        }))

export const getUser = (dispatch) =>
    fetch(`${BASE_API}/user`)
        .then(res => { console.log("get user", res.json); return res.json() })
        .then(user => dispatch({
            type: "fetch-user",
            user
        }))
        .catch(e => console.log(e))

export const findUserById = (dispatch, id) => {
    fetch(`${BASE_API}/user/${id}`)
        .then(res => { console.log("get user by id", res.json); return res.json() })
        .then(profile => dispatch({
            type: "fetch-user-by-id",
            profile
        }))
        .catch(e => console.log(e))
};

export const findAllUsers = () =>
    fetch(`${BASE_API}/users`)
        .then(res => { console.log("get all users", res.json); return res.json() })
        .catch(e => console.log(e))

export const deleteUser = (user) =>
    fetch(`${BASE_API}/users/${user._id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    })
    .then(response => { console.log("delete user", response.json); return response.json() })
    .catch(e => console.log(e))

export const userLogout = (dispatch) =>
    fetch(`${BASE_API}/logout`)
        .then(res => { console.log("user logout", res); return res })
        .then(response => dispatch({
          type: "user-logout"
          }))
        .catch(e => console.error(e))


export const updateUserProfile = (dispatch, info, uid) =>
    fetch(`${BASE_API}/user/${uid}`, {
        method: 'PUT',
        body: JSON.stringify(info),
        headers: {
            'content-type': 'application/json',
        }
    }).then(response => { console.log("update user", response.json); return response.json() })
        .then(profile =>
            dispatch({
                type: "update-user-profile",
                profile
            }))
