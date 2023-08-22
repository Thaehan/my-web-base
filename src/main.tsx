import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import Flex from 'Components/Flex'
import Home from 'Screen/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Flex />
    <Home />
    <App />
  </React.StrictMode>,
)
