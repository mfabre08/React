import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { User } from '../api/types'
import Field from '../private/Field'



const UserProfile = ( ) => {
    const [author, setAuthor] = useState<User | null>(null)

    let { id } = useParams() // get the id from ur
    const navigate = useNavigate()



    async function handleDeleteAuthor() {
        // back to Home
        navigate('/')
    }

    return (
        author && (
            <div className="user-profile-wrapper">
                <Field label="Name">
                    <span>{author.name}</span>
                </Field>
                <Field label="Email">
                    <span>{author.email}</span>
                </Field>
                <Field label="Company">
                    <span>{author.company.name}</span>
                </Field>
                <Field label="Phone">
                    <span>{author.phone}</span>
                </Field>
                <Field label="Address">
                    <span>{author.address.street} - </span>
                    <span>{author.address.city} - </span>
                    <span>{author.address.zipcode}</span>
                </Field>



                <Field label="Extra actions">
                        <button
                            type="button"
                            className="button is-warning"
                            onClick={handleDeleteAuthor}
                        >
                            Delete post
                        </button>
                    </Field>
            </div>
        )
        
    )
}

export default UserProfile
