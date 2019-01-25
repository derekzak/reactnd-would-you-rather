import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    const { users, authedUser } = this.props

    return (
      <div className='home'>
        <h3>Leaderboard</h3>
        <ul className='leaderboard-users'>
          {users.map(user => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <div className='leaderboard-score'>
                <div className='leaderboard-score-breakdown'>
                  <span>
                    Answered questions: {Object.keys(user.answers).length}
                  </span>
                </div>
                <div className='leaderboard-score-breakdown'>
                  <span>Created questions: {user.questions.length}</span>
                </div>
                <div className='leaderboard-score-total'>
                  <span>
                    Score:{' '}
                    {Object.keys(user.answers).length + user.questions.length}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  var usersArray = Object.keys(users).map(function(userId) {
    return users[userId]
  })
  return {
    users: usersArray.sort(function(a, b) {
      return (
        Object.keys(b.answers).length +
        b.questions.length -
        (Object.keys(a.answers).length + a.questions.length)
      )
    }),
    authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard)
