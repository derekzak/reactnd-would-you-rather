import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class Question extends Component {
  constructor(props) {
    super(props)

    var answersArray = Object.keys(props.users[props.authedUser].answers).map(
      function(i) {
        return i
      }
    )
    this.state = {
      questionAnswered: answersArray.includes(props.match.params.id),
      selectedOption: 'optionOne'
    }
  }

  handleChange = event => {
    this.setState({ selectedOption: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { selectedOption } = this.state
    const { dispatch } = this.props
    const { id } = this.props.match.params

    dispatch(handleAnswerQuestion({ id: id, answer: selectedOption }))

    this.setState(() => ({
      questionAnswered: true,
      selectedOption: 'optionOne'
    }))
  }
  render() {
    const { users, questions } = this.props
    const { id } = this.props.match.params
    const { questionAnswered, selectedOption } = this.state
    const question = questions[id]

    return (
      <div className='question'>
        <div className='question-author'>
          <span className='center'>
            Asked by: {users[question.author].name}
          </span>
        </div>
        {!questionAnswered && (
          <div className='question-content'>
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
        )}
        {questionAnswered && (
          <div className='question-content'>
            <div className='question-results'>
              <h3>Results:</h3>
            </div>
            <div className='question-answer'>
              <span>{question.optionOne.text}</span>
              <div className='question-votes'>
                <span>
                  {question.optionOne.votes.length} out of{' '}
                  {question.optionOne.votes.length +
                    question.optionTwo.votes.length}{' '}
                  votes
                </span>
              </div>
            </div>
            <div className='question-answer'>
              <span>{question.optionTwo.text}</span>
              <div className='question-votes'>
                <span>
                  {question.optionTwo.votes.length} out of{' '}
                  {question.optionOne.votes.length +
                    question.optionTwo.votes.length}{' '}
                  votes
                </span>
              </div>
            </div>
          </div>
        )}
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

export default connect(mapStateToProps)(Question)
