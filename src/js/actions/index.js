const uuidv1 = require('uuid/v1')

export const addSticker = (title, text) => {
  return {
    type: 'ADD_STICKER',
    id: uuidv1(),
    title,
    text
  }
}

export const loadStickers = () => {
  //console.log('loadStickers')
  return {
    type: 'LOAD_STICKERS'
  }
}

export const toggleSticker = (id) => {
  return {
    type: 'TOGGLE_STICKER',
    id
  }
}

export const deleteSticker = (id) => {
  return {
    type: 'DELETE_STICKER',
    id
  }
}
