import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.js'
import { logout } from '../../app/authSlice.js'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout())
        })
    }
    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-green-400 rounded-full cursor-pointer' onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn
