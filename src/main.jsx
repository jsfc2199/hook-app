import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CounterWithCustomHook from './01-UseState/CounterWithCustomHook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook/>
  </React.StrictMode>,
)
