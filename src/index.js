import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import stickerApp from './js/reducers'
import App from './js/components/App'

let loaded_stickers = JSON.parse(localStorage.getItem('Stickers'))
let store = createStore(stickerApp, {stickers: loaded_stickers ? loaded_stickers : []})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)