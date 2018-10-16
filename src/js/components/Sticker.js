import React from 'react'
import PropTypes from 'prop-types'

const Sticker = ({ onClick, deleteSticker, title, text }) => (
  <div
    className="sticker"
    onClick={onClick}
  >
    <div className="sticker__delete" onClick={deleteSticker}>×</div>
    <div className="sticker__wrapper">
      <div className="sticker__title">{title}</div>
      <div className="sticker__text">{text}</div>      
    </div>
  </div>
)

Sticker.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Sticker