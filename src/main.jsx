import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HooksApp from './HooksApp';
import CountarApp from './01-UseState/CountarApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountarApp/>
  </React.StrictMode>,
)
