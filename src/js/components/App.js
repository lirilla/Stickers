import React from 'react'
import AddSticker from '../containers/AddStickers'
import AllStickerList from '../containers/StickerList'
import '../../css/style.less'

const App = () => (
  <div className="stickers__wrapper">
  	<div className="stickers__list">
	    <AddSticker />
	    <AllStickerList />
	</div>
  </div>
)

export default App