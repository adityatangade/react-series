import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {

const {user} = useContext(UserContext);
    if(!user)
    {
        return <>Please Login</>
    }
    else
    {
        return <>Welcome {user.username}</>
    }
}

export default Profile
