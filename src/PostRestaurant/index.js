import React, {useEffect} from 'react';
import PostInputs from "./PostInputs"
import Navigation from '../Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../Server/users/client';

const PostRestaurant = () => {
  const dispatch = useDispatch();
  const selectUser = (state) => state.user;
  const user = useSelector(selectUser)
  //useEffect(()=>getUser(dispatch), [dispatch])
  return(
      <div>
        <Navigation active="post"/>
        {user && user.role ==='HOST' &&
        <PostInputs host={user}/>
        }
        {(!user || (user && user.role != "HOST")) &&
            <h5 className="p-3">Must be logged in as a Host to view this page.</h5>
        }
      </div>

  )
};

export default PostRestaurant;
