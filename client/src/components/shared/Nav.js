import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Login from '../auth/Login';
import Context from '../../context';
import Signout from '../auth/Signout';
import whitelogo from '../../img/whitelogo.png'

export default function Nav() {
    const { state } = useContext(Context);

    return (
        <nav>
            <div className="row">
                <div className="logo"><img src={whitelogo} alt="logo" width="90px" height="90px" /></div>
                <ul className="main-nav">
                        <li><a href="/">Quiénes Somos</a></li>
                        <li><a href="/">Planes</a></li>
                        <li>
                            <Link to='/mylearning'>
                            {state.isAuth ? <button>My learning</button> : ""}
                            </Link>
                        </li>
                        <li>{state.isAuth ? <Signout /> : <Login />}</li>
                </ul>
            </div>
        </nav>
    )
}
