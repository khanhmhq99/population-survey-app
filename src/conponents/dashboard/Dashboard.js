import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavLink to="/matdodanso">Diện tích, dân số và mật độ dân số phân theo địa phương</NavLink>
            </div>
        )
    }
}

export default Dashboard