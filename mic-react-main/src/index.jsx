import React from 'react'
import ReactDOM from 'react-dom'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'

import './styles/main.less'

import AppRouter from './components/AppRouter'

ReactDOM.render(<AppRouter />, document.getElementById('root'));