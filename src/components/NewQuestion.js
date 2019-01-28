import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = { optionOneText: '', optionTwoText: '' }
  }

  handleOptionOneChange = event => {
    this.setState({ optionOneText: event.target.value })
  }

  handleOptionTwoChange = event => {
    this.setState({ optionTwoText: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion({ optionOneText, optionTwoText }))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: ''
    }))

    this.props.history.push('/')
  }

  render() {
    const { optionOneText, optionTwoText } = this.state

    return (
      <div className='new-question'>
        <h3>Create New Question</h3>
        <span>Complete the question</span>
        <h4>Would you rather...</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Enter option one text'
            value={optionOneText}
            onChange={this.handleOptionOneChange}
          />
          <div className='new-question-or'>
            <h4>or</h4>
          </div>
          <input
            type='text'
            placeholder='Enter option two text'
            value={optionTwoText}
            onChange={this.handleOptionTwoChange}
          />
          <div className='new-question-submit'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
