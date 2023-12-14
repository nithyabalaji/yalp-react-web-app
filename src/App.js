import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Search from './Search';
import Login from './Login';
import Register from './Register';
import Profile from './Profile/index';
import ProfileEdit from './Profile/Edit/index';
import PostRestaurant from './PostRestaurant';
import AllUsers from "./AllUsers";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import reviews from "./reducers/reviews";
import user from './reducers/user';
import restaurants from './reducers/restaurants'
import profile from './reducers/profile'

const reducer = combineReducers({ reviews, user, profile, restaurants });
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/edit/:id" element={<ProfileEdit />} />
          <Route path="/post" element={<PostRestaurant/>}></Route>
          <Route path="/users" element={<AllUsers/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
