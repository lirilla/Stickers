import React from 'react'
import AddSticker from '../containers/AddStickers'
import AllStickerList from '../containers/StickerList'
import '../../css/style.less'

const App = () => (
  <div className="stickers__wrapper">
    <AddSticker />
    <AllStickerList />
  </div>
)

export default App