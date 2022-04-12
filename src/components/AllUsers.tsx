import React, { useEffect, useState } from 'react'
import { User } from '../api/types';
import { getAllUser } from '../api/user';
import UserItem from './UserItem';
import UserProfile from './UserProfile';

const AllUsers = () => {

    const [users, setUsers] = useState<Array<User>>([])
    const [loading, setLoading] = useState(false)

    async function _getAllUsers() {
        const data = await getAllUser();
        setUsers(data)
        
    }

    useEffect( () => {
        _getAllUsers()
        console.log('hello')
        }
        , [])

    function renderItem(values: User) {
        return (
            <div key={values.id}>
                <UserItem{...values} />
            </div>


        )
    }

    if (loading) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">Loading ...</p>
                </div>
            </section>
        )
    }

    if (users.length === 0) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">No Posts</p>
                </div>
            </section>
        )
    }

    return <ul className="user-list">{users.map(renderItem)}</ul>

}

export default AllUsers
