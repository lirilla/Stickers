import React from 'react'
import PropTypes from 'prop-types'
import Sticker from './Sticker'

const StickerList = ({ stickers, onStickerClick }) => (
  <div className="stickers__list">
    {stickers.map(sticker =>
      <Sticker
        key={sticker.id}
        {...sticker}
        onClick={() => onStickerClick(sticker.id)}
      />
    )}
  </div>
)

StickerList.propTypes = {
  stickers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onStickerClick: PropTypes.func.isRequired
}

export default StickerList