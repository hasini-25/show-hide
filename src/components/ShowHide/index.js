// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  onFirstClick = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  onLastClick = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state
    const firstName = first ? 'Joe' : null
    const lastName = last ? 'Jonas' : null
    const bgFirst = first ? 'para' : null
    const bgLast = last ? 'para' : null

    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="inner-container">
          <div>
            <button className="space" type="button" onClick={this.onFirstClick}>
              Show/Hide Firstname
            </button>
            <p className={` ${bgFirst}`}>{firstName}</p>
          </div>
          <div>
            <button className="space" type="button" onClick={this.onLastClick}>
              Show/Hide Lastname
            </button>
            <p className={` ${bgLast}`}>{lastName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
