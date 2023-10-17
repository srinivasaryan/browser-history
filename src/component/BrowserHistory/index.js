import {Component} from 'react'

import './index.css'

import BrowserItems from '../BrowserItems'

class BrowserHistory extends Component {
  render() {
    const {initialHistoryList} = this.props
    return (
      <ul>
        {initialHistoryList.map(eachItem => (
          <BrowserItems browserDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }
}

export default BrowserHistory
