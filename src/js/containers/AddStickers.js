import React from 'react'
import { connect } from 'react-redux'
import { addSticker } from '../actions'

let AddSticker = ({ dispatch }) => {
  let title
  let text

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim() || !text.value.trim()) {
          return
        }
        dispatch(addSticker(title.value, text.value))
        title.value = ''
        text.value = ''
      }}>
        <input ref={node => {
          title = node
        }} />
        <input ref={node => {
          text = node
        }} />
        <button type="submit">
          Add Sticker
        </button>
      </form>
    </div>
  )
}
AddSticker = connect()(AddSticker)

export default AddSticker