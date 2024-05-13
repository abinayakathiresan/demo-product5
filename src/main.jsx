import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './State/store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter} from "react-router-dom";
import Layout from './Components/Pages/Layout/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
    <Layout />
    </BrowserRouter>
  </Provider>,
)
