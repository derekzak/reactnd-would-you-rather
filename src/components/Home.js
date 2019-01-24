import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPreview from './QuestionPreview'

class Home extends Component {
  render() {
    const {
      users,
      answeredQuestions,
      unansweredQuestions,
      authedUser
    } = this.props

    return (
      <div className='home'>
        <h3 className='center'>Home</h3>
        <ul className='unanswered-questions'>
          {unansweredQuestions.map(question => (
            <li key={question.id}>
              <QuestionPreview question={question} />
            </li>
          ))}
        </ul>
        <ul className='answered-questions'>
          {answeredQuestions.map(question => (
            <li key={question.id}>
              <QuestionPreview question={question} />
            </li>
          ))}
        </ul>
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
