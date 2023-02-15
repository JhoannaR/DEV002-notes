import React from 'react' 
import {Link} from 'react-router-dom'

export default function HomePage(){
    return (
    <div>
        <h2>RemindMe</h2>
    <Link to="/signup">Sign Up</Link>
    <Link to="/signin">Sign In</Link>



    </div>
    )
}