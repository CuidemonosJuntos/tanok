import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Login from '../auth/Login';
import Context from '../../context';
import Signout from '../auth/Signout';

export default function Nav() {
    const { state } = useContext(Context);

    return (
        <div>
            <li>Services</li>
            <Link to='/mylearning'>
                {state.isAuth ? <button>My learning</button> : ""}
            </Link>
            {state.isAuth ? <Signout /> : <Login />}
            <br></br>
        </div>
    )
}
