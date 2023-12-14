import React, { useState, useEffect } from "react";
import { BsFillCheckCircleFill, BsPencil, BsTrash3Fill, BsPlusCircleFill }
    from "react-icons/bs";
import { Link } from "react-router-dom";
import { findAllUsers } from '../Server/users/client';
import Navigation from "../Navigation";

function AllUsers() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    // const createUser = async () => {
    //     try {
    //         const newUser = await client.createUser(user);
    //         setUsers([newUser, ...users]);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // const selectUser = async (user) => {
    //     try {
    //         const u = await client.findUserById(user._id);
    //         setUser(u);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // const updateUser = async () => {
    //     try {
    //         const status = await client.updateUser(user);
    //         setUsers(users.map((u) => (u._id === user._id ? user : u)));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    const deleteUser = async (user) => {
        // try {
        //     await client.deleteUser(user);
        //     setUsers(users.filter((u) => u._id !== user._id));
        // } catch (err) {
        //     console.log(err);
        // }
    };
    const fetchUsers = async () => {
        const users = await findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <Navigation active={"users"} />
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
                                    <button className="btn btn-danger" onClick={() => deleteUser(user)}>
                                        <BsTrash3Fill />
                                    </button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AllUsers;