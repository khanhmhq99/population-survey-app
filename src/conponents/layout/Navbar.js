import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper black">
                <div className="container">
                    <Link to="/" className="brand-logo">DAN SO APP DEMO</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar