import { Link } from 'react-router-dom';

import Login from '../auth/Login'

export default function Nav() {
    return (
        <div>
            <li>Services</li>
            <Link to='/mylearning'>
                <button>My learning</button>
            </Link>
            <Login />
        </div>
    )
}
