import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='navbar'>
      <NavLink to='/' exact className='nav-item' activeClassName='active'>
        Home
      </NavLink>
      <NavLink to='/new' className='nav-item' activeClassName='active'>
        New Question
      </NavLink>
      <NavLink to='/leaderboard' className='nav-item' activeClassName='active'>
        Leaderboard
      </NavLink>
      <Link className='nav-item' to='/login'>
        Logout
      </Link>
    </nav>
  )
}
