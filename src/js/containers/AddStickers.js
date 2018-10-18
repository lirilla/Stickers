import React from 'react'
import { connect } from 'react-redux'
import { addSticker } from '../actions'

let AddSticker = ({ dispatch }) => {
  let props = {
    title: '',
    text: ''
  }
  let title, text

  return (
    <div className="sticker">
      <div className="sticker__wrapper">
      <form onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim() || !text.value.trim()) {
          return
        }
        props = {
          title: title.value,
          text: text.value
        }
        dispatch(addSticker(props))
        title.value = ''
        text.value = ''
      }}>
        <input 
          placeholder="Sticker title"
          ref={node => {title = node}} />
        <input 
          placeholder="Sticker text"
          ref={node => {text = node}} />
        <button type="submit">
          Add Sticker
        </button>
      </form>
      </div>
    </div>
  )
}
AddSticker = connect()(AddSticker)

export default AddSticker