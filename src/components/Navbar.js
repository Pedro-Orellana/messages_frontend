import React from 'react'
import { Link } from 'react-router-dom'
import { GOOGLE_CLIENT_API_KEY } from '../misc/constants'
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { isSignedInReducer, informationReducer } from '../reducers/GoogleSlicer'
import { isSignedInSelector } from '../reducers/GoogleSlicer'
import { useDispatch, useSelector } from 'react-redux'

var dispatch


const Navbar = () => {

    dispatch = useDispatch()
    const isSignedIn = useSelector(isSignedInSelector)



    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_API_KEY,
            callback: JwtHandleCallback,
        })

    })

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse container-fluid">


                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className='nav-link' to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/list">List</Link>
                        </li>

                    </ul>

                    <ul className="navbar-nav ms-auto pe-2 mb-lg-0">
                        <li className="nav-item">
                            <button className={`btn btn-outline-success ${isSignedIn ? "invisible" : "visible"}`} onClick={() => { displayOneTap() }} type="button" >
                                Sign in with Google
                            </button>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>

    )
}


const JwtHandleCallback = (response) => {
    console.log(response)
    const decoded_response = jwtDecode(response.credential)
    console.log(decoded_response)
    dispatch(isSignedInReducer(true))
    dispatch(informationReducer({
        first_name: decoded_response.given_name,
        last_name: decoded_response.family_name,
        email: decoded_response.email
    }))
}

const displayOneTap = () => {
    console.log(window.google.accounts)
    window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
            console.log("notification not being displayed...")
        }
    });
}


export default Navbar