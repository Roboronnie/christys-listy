import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to="/company" >Company</Link>
                <Link to="/student" >Student</Link>
                <Link to="/schedule" >Schedule</Link>
            </div>
        )
    }
}

export default NavBar;