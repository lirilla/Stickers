import { combineReducers } from 'redux'
import sticker from './sticker'
import stickers from './stickers'

const stickerApp = combineReducers({
  sticker,
  stickers
})

export default stickerApp