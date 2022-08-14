import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand"><Link to={'/'}>To Home Page</Link></a>
        <a className="nav-link active"><Link to={'/about'}>To About Page</Link></a>
        <a className="nav-link"><Link to={'/flights'}>To Flights</Link></a>
        <a className="nav-link"><Link to={'/login'}>To Login</Link></a>
        {/* <Logout/>  */}
        {/* itay- logout be only if user do login */}
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </nav>
  )
}

export default Nav