import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './styles/main.less'
import AppRouter from './components/AppRouter'
axios.defaults.baseURL = '/api';
ReactDOM.render(<AppRouter />, document.getElementById('root'));