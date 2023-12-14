import React, { useState, useEffect } from "react";
import { BsTrash3Fill }
    from "react-icons/bs";
import { Link } from "react-router-dom";
import { findAllUsers, deleteUser } from '../Server/users/client';
import Navigation from "../Navigation";
import { useSelector } from "react-redux";

function AllUsers() {
    const [users, setUsers] = useState([]);
    const currentUser = useSelector(state => state.user);

    const userDelete = async (user) => {
        console.log("user to be deleted", user);
        try {
            await deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };
    const fetchUsers = async () => {
        const users = await findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <Navigation active={"users"} />
            {(!currentUser || (currentUser && currentUser.role != "ADMIN")) &&
                <h5 className="p-3">Must be logged in as an Admin to view page.</h5>}
            {currentUser && currentUser.role == "ADMIN" &&
                <div className="p-3">
                    <h3>User List</h3>
                    <table className="table w-75">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td><Link to={`/profile/${user._id}`}>
                                        {user.username}
                                    </Link></td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => userDelete(user)}>
                                            <BsTrash3Fill />
                                        </button>
                                    </td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}
export default AllUsers;