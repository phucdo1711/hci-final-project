import { compose } from 'redux'
import { withRouter } from 'utils/components'
import { lifecycle, renderNothing} from 'recompose'

export default compose(
  withRouter,
  // create listener for refcode, results go into redux
  lifecycle({
    async componentWillMount(){
      const {router} = this.props;
      await localStorage.setItem('refId' , router.params.refCode)
      router.push('/signup')
    }
  }), 
  renderNothing
)
