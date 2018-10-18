import sticker from './sticker'

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
		case 'SAVE_STICKER':
			console.log(action)
			localStorage.setItem('Stickers', JSON.stringify(state.map(item => 
				{
					if (item.id != action.id) {
						return item
					}
					else {
						return {
							id: item.id,
							props: {
								title: action.props.title,
								text: action.props.text,
								edit_mode: false
							}
						}
					}
				}
			)));

			return state.map(t =>
				sticker(t, action))

		case 'TOGGLE_EDIT':
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