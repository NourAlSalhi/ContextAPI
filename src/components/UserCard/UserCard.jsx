import React, { useContext } from 'react'
import { GlobalContext } from '../../utils/context/GlobelContext'
import './UserCard.css'

const UserCard = () => {
  const { globelState } = useContext(GlobalContext)
  const { userDate } = globelState
  return (
    <div className='user-card'>
      {/* <img className='profile-img' src={userDate.profilePic} alt='user' /> */}
       <img className='profile-img' src={userDate.profilePic} alt='user' />
      <h3>User Name</h3>
    </div>
  )
}

export default UserCard