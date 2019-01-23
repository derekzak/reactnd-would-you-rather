import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = { value: '' }
  }

  validateForm() {
    return this.state.value.length > 0 && this.state.value.length > 0
  }

  handleChange = event => {
    const { dispatch } = this.props

    this.setState({ value: event.target.value })
    dispatch(setAuthedUser(event.target.value.trim()))
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    const { users } = this.props
    const { value } = this.state

    return (
      <div className='login'>
        <h3 className='center'>User Login</h3>
        <form onSubmit={this.handleSubmit}>
          <select value={value} onChange={this.handleChange}>
            <option value='' />
            {Object.keys(users).map(user => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
          <button disabled={!this.validateForm()} type='submit'>
            Login
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)
