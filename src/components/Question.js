import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class Question extends Component {
  constructor(props) {
    super(props)

    this.state = { selectedOption: 'optionOne' }
  }

  handleChange = event => {
    this.setState({ selectedOption: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { selectedOption } = this.state
    const { dispatch, question } = this.props

    dispatch(handleAnswerQuestion({ id: question.id, answer: selectedOption }))

    this.setState(() => ({
      selectedOption: 'optionOne'
    }))
  }
  render() {
    const { question, users } = this.props
    const { selectedOption } = this.state

    return (
      <div className='question'>
        <div className='question-author'>
          <span className='center'>
            Asked by: {users[question.author].name}
          </span>
        </div>
        <div className='question-wyr'>
          <h3>Would you Rather...</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='question-radio'>
            <label>
              <input
                type='radio'
                value='optionOne'
                checked={selectedOption === 'optionOne'}
                onChange={this.handleChange}
              />
              {question.optionOne.text}
            </label>
          </div>
          <div className='question-radio'>
            <label>
              <input
                type='radio'
                value='optionTwo'
                checked={selectedOption === 'optionTwo'}
                onChange={this.handleChange}
              />
              {question.optionTwo.text}
            </label>
          </div>
          <div className='question-submit'>
            <button>Submit</button>
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

export default connect(mapStateToProps)(Question)
