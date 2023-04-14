import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isOn: true, url: '', caption: '', warning: '', current: 0, cardsList: []}
    this.handleClick = this.handleClick.bind(this)
    this.handleURLChange = this.handleURLChange.bind(this)
    this.handleCaptionChange = this.handleCaptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleClick() {
    this.setState(oldState => ({
      isOn: !oldState.isOn
    }))
    this.setState({url: ''})
    this.setState({caption: ''})
    this.setState({warning: ''})
  }

  handleURLChange(event) {
    this.setState({url: event.target.value})
  }

  handleCaptionChange(event) {
    this.setState({caption: event.target.value})
  }

  handleSubmit(event) {
    if (this.state.url === '' || this.state.caption === '') {
      this.setState({warning: 'You must enter both URL and a caption'})
    } else {
      this.setState(oldState => ({
        current: oldState.current + 1
      }))
      this.setState({cardsList: this.state.cardsList.concat({url: this.state.url, caption: this.state.caption, index: this.state.current})})
      this.setState(oldState => ({
        isOn: !oldState.isOn
      }))
      this.setState({url: ''})
      this.setState({caption: ''})
      this.setState({warning: ''})
    }

    event.preventDefault()
  }

  handleCancel(event) {
    this.setState(oldState => ({
      isOn: !oldState.isOn
    }))
    this.setState({url: ''})
    this.setState({caption: ''})
    this.setState({warning: ''})
    event.preventDefault()
  }

  handleDelete(cardIndex) {
    this.setState(oldValues => ({
      cardsList: oldValues.cardsList.filter(cards => cards.index !== cardIndex)
    }))
  }

  render() {
    if (!this.state.isOn) {
      return (
        <div className="row">
          <div className="column">
            <button onClick={this.handleClick}>
              Open photo entry dialog
            </button>  
            <form className='card'>
              <div>
                <input type="text" name="url" placeholder="Enter Photo URL" value={this.state.url} onChange={this.handleURLChange}/>
              </div>
              <div>
                <input type="text" name="caption" placeholder="Enter Caption" value={this.state.caption} onChange={this.handleCaptionChange}/>
              </div>
              <div>
                <button onClick={this.handleSubmit}>Accept</button>
                <button onClick={this.handleCancel}>Cancel</button>
              </div>
              <div className="warning">{this.state.warning}</div>
            </form>
          </div>
          <div className="column">
            {this.state.cardsList.reverse().map((card, index) =>
              <div key={index} className='card'>
                <img src={card.url} alt=""/>
                <div><button onClick={() => this.handleDelete(card.index)}>X</button> {card.caption}</div>
              </div>
            )}
          </div>
        </div>
      )
    } else {
      return (
        <div className="row">
          <div className="column">
            <button onClick={this.handleClick}>
              Open photo entry dialog
            </button>
          </div>
          <div className="column">
            {this.state.cardsList.reverse().map((card, index) =>
              <div key={index} className='card'>
                <img src={card.url} alt=""/>
                <div><button onClick={() => this.handleDelete(card.index)}>X</button> {card.caption}</div>
              </div>
            )}
          </div>
        </div>
      )
    }
  }
}

function App() {
  return (
    <div>
      <Toggle />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)