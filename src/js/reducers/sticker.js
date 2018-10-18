const sticker = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STICKER':
      return {
        id: action.id,
        props: {
          title: action.props.title,
          text: action.props.text,
          edit_mode: false,
        }
      }

    case 'SAVE_STICKER': 
      return Object.assign({}, state, { props: {
        title: action.props.title,
        text: action.props.text,
        edit_mode: false
      }})

    case 'TOGGLE_EDIT':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, { props: {
        title: state.props.title,
        text: state.props.text,
        edit_mode: !state.props.edit_mode
      }})

    default:
      return state
  }
}

export default sticker