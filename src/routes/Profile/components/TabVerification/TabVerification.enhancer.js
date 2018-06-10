import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { withHandlers, withState } from 'recompose'

export default compose(
  // create listener for tabverification, results go into redux
  // firestoreConnect([{ collection: 'tabverification' }]),
  // // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   tabverification: data.tabverification
  // }))
  withState('imgPreviewUrl', 'setImgPreviewUrl', null),
  withHandlers({
    // Chọn ảnh => render ảnh
    handleImageChange: ({ setImgPreviewUrl }) => e => {
      e.preventDefault()
      let file = e.target.files[0]
      let reader = new FileReader()

      reader.onloadend = () => {
        // this.setState({
        //   file: file,
        //   imagePreviewUrl: reader.result
        // });
        setImgPreviewUrl(reader.result)
        // console.log(file, reader.result)
      }

      reader.readAsDataURL(file)
    }
  })
)
