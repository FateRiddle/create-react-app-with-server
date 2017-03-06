import { connect } from 'react-redux'
import React, { Component } from 'react';
import './style.css';
import Header from '../Header.js'
import MainContent from '../MainContent/index'
import Login from '../Login.js'

class App extends Component {
  
  render() {
    return (this.props.login?
      <div>
        <Header />
        <div className="Body">
          <MainContent />
        </div>
      </div>:
      <Login />
    )
  }
}

const mapStateToProps = ({ login }) => ({ login })

App = connect(mapStateToProps)(App)

export default App
