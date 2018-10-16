const sticker = (state, action) => {
  switch (action.type) {
    case 'ADD_STICKER':
      return {
        id: action.id,
        title: action.title,
        text: action.text,
      }
    case 'TOGGLE_STICKER':
      if (state.id !== sticker.id) {
        return state
      }

      return Object.assign({}, state, {
        title: title + ' toggled'
      })

    default:
      return state
  }
}

const stickers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STICKER':
      localStorage.setItem('Stickers', JSON.stringify([
          ...state,
          sticker(undefined, action)
        ]));
      return [
        ...state,
        sticker(undefined, action)
      ]
    case 'TOGGLE_STICKER':
      return state.map(t =>
        sticker(t, action)
      )
    case 'DELETE_STICKER': 
      localStorage.setItem('Stickers', JSON.stringify(state.filter(item => item.id != action.id)));
      return state.filter(item => item.id != action.id)
    default:
      return state
  }
}

export default stickers