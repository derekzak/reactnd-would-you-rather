import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
  render() {
    const { users, questions, authedUser } = this.props

    return (
      <div className='home'>
        <h3 className='center'>Home</h3>
        <Question question={questions['8xf0y6ziyjabvozdd253nd']} />
      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  }
}

export default connect(mapStateToProps)(Home)
