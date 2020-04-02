import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'

import './Global.css'

export default class componentName extends Component {
  render() {
    return (
      <Router>
        <Routes/>
      </Router >
    )
  }
}
