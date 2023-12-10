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
        .then(user => dispatch({
            type: "fetch-user-by-id",
            user
        }))
        .catch(e => console.log(e))
};


// export const isLoggedIn = () =>
//     fetch(USER_API)
//         .then(response => console.log("is logged in ", response))

export const userLogout = (dispatch) =>
    fetch(`${BASE_API}/logout`)
        .then(res => { console.log("user logout", res); return res })
        // .then(response => dispatch({
        //   type: "user-logout"
        //   }))
        .catch(e => console.error(e))


export const updateUserProfile = (dispatch, info) =>
    fetch(`${BASE_API}/user`, {
        method: 'PUT',
        body: JSON.stringify(info),
        headers: {
            'content-type': 'application/json',
        }
    }).then(response => { console.log("update user", response.json); return response.json() })
        .then(user =>
            dispatch({
                type: "update-user-profile",
                user
            }))


// export const login = async (credentials) => {
//     const response = await request.post(`${USERS_API}/login`, credentials);
//     return response.data;
// };
// export const account = async () => {
//     const response = await request.post(`${USERS_API}/account`);
//     return response.data;
// };
// export const updateUser = async (user) => {
//     console.log(`Updated user id: ${user._id}`);
//     const response = await request.put(`${USERS_API}/${user._id}`, user);
//     return response.data;
// };
// export const findAllUsers = async () => {
//     const response = await request.get(`${USERS_API}`);
//     return response.data;
// };
// export const createUser = async (user) => {
//     const response = await request.post(`${USERS_API}`, user);
//     return response.data;
// };

// export const findUserById = async (id) => {
//     const response = await request.get(`${BASE_API}/user/${id}`);
//     return response.data;
// };

// export const deleteUser = async (user) => {
//     const response = await request.delete(
//         `${USERS_API}/${user._id}`);
//     return response.data;
// };
// export const register = async (credentials) => {
//     const response = await request.post(
//         `${USERS_API}/register`, credentials);
//     return response.data;
// };
// export const logout = async () => {
//     const response = await request.post(`${USERS_API}/logout`);
//     return response.data;
// };  
