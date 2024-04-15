// Write your code here
import {Component} from 'react'
import './index.css'
const Head_img = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tail_img = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {isToss: Head_img, heads: 0, tails: 0}
  onToss = () => {
    const {heads, tails} = this.state
    const Tossed = Math.floor(Math.random() * 2)
    let tossed = ''
    let Heads = heads
    let Tails = tails
    if (Tossed === 0) {
      tossed = Head_img
      Heads += 1
    } else {
      tossed = tail_img
      Tails += 1
    }
    this.setState({isToss: tossed, heads: Heads, tails: Tails})
  }

  render() {
    const {isToss, heads, tails} = this.state
    const total = heads + tails

    return (
      <div className="background">
        <div className="sub-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={isToss} alt="Toss Result" />
          <button onClick={this.onToss}>Toss Coin</button>
          <div className="pol">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
