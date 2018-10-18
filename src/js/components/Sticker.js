import React from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'

let Sticker = ({ id, onClick, deleteSticker, savingSticker, props }) => {
	let new_props = {
	    title: props.title,
	    text: props.text,
	    edit_mode: props.edit_mode
	  }
	let title, text

	return (
		<div
			className="sticker">
				{ this }
				<div className="sticker__delete" onClick={deleteSticker}>×</div> 
				<div className="sticker__wrapper">
					{!props.edit_mode && 
						<>
							<div onClick={onClick} className="sticker__title">{props.title}</div>
							<div onClick={onClick} className="sticker__text">{props.text}</div>  
						</> 
					} 

					{props.edit_mode && 
						<>
							<form onSubmit={e => {
								e.preventDefault()
								if (!title.value.trim() || !text.value.trim()) {
									return
								}
								new_props = {
									title: title.value,
									text: text.value,
									edit_mode: props.edit_mode
								}
								console.log(new_props)

								savingSticker(id, new_props)
								/*title.value = ''
								text.value = ''*/
							}}>
							<input 
								placeholder="New title"
								defaultValue={new_props.title}
								ref={node => {title = node}} />
							<input 
								placeholder="New text"
								defaultValue={new_props.text}
								ref={node => {text = node}} />
							<button type="submit">
								Save
							</button> 
							</form>
						</> 
					}   
				</div> 
		</div>
	)
	
}

Sticker.propTypes = {
	onClick: PropTypes.func.isRequired,
	deleteSticker: PropTypes.func.isRequired,
	//saveSticker: PropTypes.func.isRequired,
	props: PropTypes.shape({
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			edit_mode: PropTypes.bool.isRequired
		})
}

//Sticker = connect()(Sticker)

export default Sticker