const uuidv1 = require('uuid/v1')

export const addSticker = (props) => {
  return {
    type: 'ADD_STICKER',
    id: uuidv1(),
    props
  }
}

export const deleteSticker = (id) => {
  return {
    type: 'DELETE_STICKER',
    id
  }
}

export const toggleEdit = (id) => {
  return {
    type: 'TOGGLE_EDIT',
    id
  }
}

export const saveSticker = (id, props) => {
  console.log(id)
  console.log(props)
  return {
    type: 'SAVE_STICKER',
    id,
    props
  }
}

/*export const deleteSticker = (id) => {
  return {
    type: 'DELETE_STICKER',
    id
  }
}*/
