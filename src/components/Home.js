import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { showAnswered: false }
  }

  toggleShowAnswered = event => {
    if (this.state.showAnswered) {
      document.getElementById('questionToggleBtn').innerHTML =
        'Show Answered Questions'
    } else {
      document.getElementById('questionToggleBtn').innerHTML =
        'Show Unanswered Questions'
    }

    this.setState(prevState => {
      return { showAnswered: !prevState.showAnswered }
    })
  }

  render() {
    const {
      users,
      answeredQuestions,
      unansweredQuestions,
      authedUser
    } = this.props
    const { showAnswered } = this.state

    return (
      <div className='home'>
        <h3 className='center'>Home</h3>
        <div className='questions-toggle-button'>
          <button id='questionToggleBtn' onClick={this.toggleShowAnswered}>
            Show Answered Questions
          </button>
        </div>
        {!showAnswered && (
          <ul className='unanswered-questions'>
            {unansweredQuestions.map(question => (
              <li key={question.id}>
                <QuestionPreview question={question} />
              </li>
            ))}
          </ul>
        )}
        {showAnswered && (
          <ul className='answered-questions'>
            {answeredQuestions.map(question => (
              <li key={question.id}>
                <QuestionPreview question={question} />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  var questionsArray = Object.keys(questions).map(function(i) {
    return questions[i]
  })
  var answersArray = Object.keys(users[authedUser].answers).map(function(i) {
    return i
  })
  return {
    users,
    answeredQuestions: questionsArray.filter(question =>
      answersArray.includes(question.id)
    ),
    unansweredQuestions: questionsArray.filter(
      question => !answersArray.includes(question.id)
    ),
    authedUser
  }
}

export default connect(mapStateToProps)(Home)
