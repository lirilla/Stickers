import React from 'react'
import PropTypes from 'prop-types'
import Sticker from './Sticker'

const StickerList = ({ stickers, onStickerClick, onStickerSave, onDeleteSticker }) => (
    stickers.map(sticker =>
      <Sticker
        key={sticker.id}
        {...sticker}
        id={sticker.id}
        onClick={() => onStickerClick(sticker.id)}
        savingSticker={(id, props) => onStickerSave(id, props)}
        deleteSticker={() => onDeleteSticker(sticker.id)}
      />
    )
)

StickerList.propTypes = {
  stickers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    props: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      edit_mode: PropTypes.bool.isRequired
    })
  }).isRequired).isRequired,
  onStickerClick: PropTypes.func.isRequired,
  onStickerSave: PropTypes.func.isRequired,
  onDeleteSticker: PropTypes.func.isRequired
}

export default StickerList