import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    const { users } = this.props

    return (
      <div className='leaderboard'>
        <h3>Leaderboard</h3>
        <div className='leaderboard-users'>
          {users.map(user => (
            <div className='card mb-6'>
              <div className='card mb-6 shadow-sm'>
                <img
                  className='card-img-top'
                  style={{ height: 100, width: 100, display: 'block' }}
                  src={process.env.PUBLIC_URL + user.avatarURL}
                  alt=''
                />
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
                      <b>
                        Score:{' '}
                        {Object.keys(user.answers).length +
                          user.questions.length}
                      </b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
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
    })
  }
}

export default connect(mapStateToProps)(Leaderboard)
