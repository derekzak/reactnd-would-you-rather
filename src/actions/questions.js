import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { addUserQuestion } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { optionOneText, optionTwoText } = question
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: authedUser
    })
      .then(question => dispatch(addQuestion(question)))
      .then(action => dispatch(addUserQuestion(action.question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function answerQuestion(question) {
  return {
    type: ANSWER_QUESTION,
    question
  }
}

export function handleAnswerQuestion(question) {
  return (dispatch, getState) => {
    const { id, answer } = question
    const { authedUser } = getState()

    dispatch(showLoading())
    console.log('Answer params: ', question)
    return saveQuestionAnswer({
      authedUser: authedUser,
      qid: id,
      answer: answer
    })
      .then(question => dispatch(answerQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
