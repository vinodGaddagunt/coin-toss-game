// Write your code here
import {Component} from 'react'

import './index.css'

const HEAD_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImageURl: HEAD_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    let tossImage = ''
    let totalHeadCount = headsCount
    let totalTailsCount = tailsCount
    if (toss === 0) {
      tossImage = HEAD_IMG_URL
      totalHeadCount += 1
    } else {
      tossImage = TAIL_IMG_URL
      totalTailsCount += 1
    }

    this.setState({
      tossImageURl: tossImage,
      headsCount: totalHeadCount,
      tailsCount: totalTailsCount,
    })
  }

  render() {
    const {tossImageURl, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="inner-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossImageURl} alt="toss coin" className="toss-image" />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="total-head-tail-container">
            <p className="description">Total: {totalCount}</p>
            <p className="description">Heads: {headsCount}</p>
            <p className="description">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
