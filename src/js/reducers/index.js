import { combineReducers } from 'redux'
import stickers from './stickers'

const stickerApp = combineReducers({
  stickers,
})

export default stickerApp