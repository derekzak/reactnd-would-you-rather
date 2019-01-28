import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class QuestionPreview extends Component {
  render() {
    const { question, users } = this.props

    return (
      <div className='card mb-6 shadow-sm'>
        <img
          className='card-img-top'
          style={{ height: 100, width: 100, display: 'block' }}
          src={process.env.PUBLIC_URL + users[question.author].avatarURL}
        />
        <div className='card-body'>
          <div className='question-preview-author'>
            <span className='center'>{users[question.author].name} asks:</span>
          </div>
          <div className='question-preview-wyr'>
            <h3>Would you Rather...</h3>
          </div>
          <div className='question-preview-snippet'>
            <span className='center'>
              ...{question.optionOne.text.slice(0, 15)}...
            </span>
          </div>
          <div className='question-preview-submit'>
            <Link id={question.id} to={`/question/${question.id}`}>
              <button>View Poll</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(QuestionPreview)
