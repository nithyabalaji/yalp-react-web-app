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
        {!user &&
        <h5>Please log in before checking your this page!</h5>
        }
      </div>

  )
};

export default PostRestaurant;
