import { connect } from 'react-redux'
import { toggleEdit, deleteSticker, saveSticker } from '../actions'
import StickerList from '../components/StickerList'

const getAllStickers = (stickers) => {
  return stickers
}

const mapStateToProps = (state) => {
  return {
    stickers: getAllStickers(state.stickers)
  }
}

const mapDispatchToProps = (dispatch) => {
  //dispatch(loadStickers())
  return {
    onStickerSave: (id, props) => {
      dispatch(saveSticker(id, props))
    },
    onStickerClick: (id) => {
      dispatch(toggleEdit(id))
    },
    onDeleteSticker: (id) => {
      dispatch(deleteSticker(id))
    }
  }
}

const AllStickerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StickerList)

export default AllStickerList