import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    const { users, answer, authedUser } = this.props

    return <div className='home'>Leaderboard</div>
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard)
