import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux';
import {getUser,userLogout} from '../Server/users/client';

const selectUser = (state) => state.user;
const Navigation = ({active}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUser(dispatch);
    }, [dispatch])
    const user = useSelector(selectUser);
    const handleLogout = async () => {
        await userLogout(dispatch);
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-purple">
            <div className="container-fluid">
                <Link
                    to="/"
                    className="navbar-brand ms-1">
                        Yalp
                </Link>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto flex-row-container">
                        <li className="nav-item">
                            <Link to="/"
                                  className={`nav-link ${active === 'home' ? 'active' : ''}`}>
                                    Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search"
                                  className={`nav-link ${active === 'search' ? 'active' : ''}`}>
                                    Seach
                            </Link>
                        </li>
                        {
                            user && user.role === 'HOST' &&
                            <li className="nav-item">
                            <Link to="/post"
                            className={`nav-link ${active === 'post' ? 'active' : ''}`}>
                            Post
                            </Link>
                            </li>
                        }
                        {
                            user && user.role === 'ADMIN' &&
                            <li className="nav-item">
                            <Link to="/users"
                            className={`nav-link ${active === 'users' ? 'active' : ''}`}>
                            Users
                            </Link>
                            </li>
                        }
                        {
                            user &&
                            <li className="nav-item">
                                <Link to="/home"
                                      className={`nav-link`}
                                      onClick={handleLogout}>
                                    Logout
                                </Link>
                            </li>
                        }
                        {
                            !user &&
                            <li className="nav-item">
                                <Link to="/login"
                                  className={`nav-link ${active === 'login' ? 'active' : ''}`}>
                                    Login
                                </Link>
                            </li>}
                        {!user &&
                            <li className="nav-item">
                            <Link to="/register"
                            className={`nav-link ${active === 'register' ? 'active' : ''}`}>
                            Register
                            </Link>
                            </li>
                        }
                        {user &&
                        <li className="nav-item float-end">
                            <Link to="/profile"
                                  className={`nav-link ${active === 'profile' ? 'active' : ''}`}>
                                  Profile
                                  <FaUser className='ms-1 mb-1'/>
                                <i className="fas fa-user"></i>
                            </Link>
                        </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navigation;


