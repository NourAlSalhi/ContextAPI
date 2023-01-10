import React from 'react'
import UserCard from '../UserCard/UserCard'

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Context API</h1>
            <UserCard />
        </div>
    )
}

export default Header