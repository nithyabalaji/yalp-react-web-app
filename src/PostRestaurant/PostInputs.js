import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {postRestaurant} from '../Server/restaurant/client';

const PostInputs = ({host}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const postHandler = () => {
    console.log("post restaurant")
    postRestaurant({
      name: name,
      description: description,
      address: address,
      phone: phone,
      website: website,
      photo:{images:{large:{url:image}}},
      author: host._id
    }).then(res => {console.log("success post"); navigate('/search')})
        .catch(e => console.error(e))
  }

  return(
      <>
        <div className="d-flex card input-group">
          <div className="card-body">
            <h3>
              Post your Restaurant
            </h3>
            <div className="mb-3">
              <label className="form-label"
                     for="username"><b>Restaurant Name</b></label>
              <input className="form-control" type="text" id="username"
                     name="name" onChange={e => setName(e.target.value)} autoFocus required/>
            </div>
            <div className="mb-3">
              <label className="form-label" for="phone"><b>Phone</b></label>
              <input className="form-control" type="text" id="phone"
                     name="phone" onChange={e => setPhone(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label className="form-label"
                     for="address"><b>Address</b></label>
              <input className="form-control" type="text" id="address"
                     name="address" onChange={e => setAddress(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label className="form-label"
                     for="website"><b>Website</b></label>
              <input className="form-control" type="text" id="website"
                     name="website" onChange={e => setWebsite(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label className="form-label"
                     for="image"><b>Image URL</b></label>
              <input className="form-control" type="text" id="image"
                     name="image" onChange={e => setImage(e.target.value)} required/>
            </div>
            <div className="form-group">
              <label for="description" className="form-label"><b>Restaurant Description</b></label>
              <textarea className="form-control"
                        id="description"
                        onChange={(event) => setDescription(event.target.value)}/>
            </div>
            <button className="btn btn-primary purple mt-2" onClick={postHandler}>Post</button>
          </div>
        </div>
      </>
  )

}
export default PostInputs;