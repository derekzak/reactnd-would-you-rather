import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class QuestionPreview extends Component {
  render() {
    const { question, users } = this.props

    return (
      <div className='question-preview'>
        <div className='question-preview-author'>
          <span className='center'>{users[question.author].name} asks:</span>
        </div>
        <div className='question--preview-wyr'>
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
    )
  }
}
function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(QuestionPreview)
