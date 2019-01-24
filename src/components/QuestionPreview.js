import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPreview extends Component {
  handleSubmit = event => {
    event.preventDefault()

    // todo: navigate to question page
  }
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
        <form onSubmit={this.handleSubmit}>
          <div className='question-preview-submit'>
            <button>View Poll</button>
          </div>
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

export default connect(mapStateToProps)(QuestionPreview)
