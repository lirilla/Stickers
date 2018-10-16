import { connect } from 'react-redux'
import { toggleSticker, loadStickers } from '../actions'
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
    onStickerClick: (id) => {
      dispatch(toggleSticker(id))
    }
  }
}

const AllStickerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StickerList)

export default AllStickerList