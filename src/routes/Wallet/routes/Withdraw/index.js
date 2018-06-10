import { WALLET_PATH } from 'constants'

export default store => ({
  path: `${WALLET_PATH}/withdraw`,
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure(
      [],
      require => {
        /*  Webpack - use require callback to define
          dependencies for bundling   */
        const Withdraw = require('./components/Withdraw').default

        /*  Return getComponent   */
        cb(null, Withdraw)

        /* Webpack named bundle   */
      },
      'Withdraw'
    )
  }
})
