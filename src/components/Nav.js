import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    const { users, user } = this.props
    var authedUsername = ''
    if (user !== null) {
      try {
        authedUsername = `Hello, ${users[user].name}`
      } catch (e) {
        //ignore
      }
    }

    return (
      <nav className='navbar'>
        <NavLink to='/' exact className='nav-item' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/new' className='nav-item' activeClassName='active'>
          New Question
        </NavLink>
        <NavLink
          to='/leaderboard'
          className='nav-item'
          activeClassName='active'
        >
          Leaderboard
        </NavLink>
        <span className='nav-item'>{authedUsername}</span>
        <Link className='nav-item' to='/login'>
          Logout
        </Link>
      </nav>
    )
  }
}
function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Nav)
