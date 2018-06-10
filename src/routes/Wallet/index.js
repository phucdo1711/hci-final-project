import { WALLET_PATH as path } from 'constants'

export default store => ({
  path,
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure(
      [],
      require => {
        /*  Webpack - use require callback to define
          dependencies for bundling   */
        const Wallet = require('./components/Wallet').default

        /*  Return getComponent   */
        cb(null, Wallet)

        /* Webpack named bundle   */
      },
      'Wallet'
    )
  },
  getChildRoutes(partialNextState, cb) {
    require.ensure([], require => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Deposit = require('./routes/Deposit').default
      const Withdraw = require('./routes/Withdraw').default

      /*  Return getComponent   */
      cb(null, [Deposit(store), Withdraw(store)])
    })
  }
})
