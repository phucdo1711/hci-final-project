import { INVEST_PATH as path } from 'constants'

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
        const Invest = require('./components/Invest').default

        /*  Return getComponent   */
        cb(null, Invest)

        /* Webpack named bundle   */
      },
      'Invest'
    )
  },
  getChildRoutes(partialNextState, cb) {
    require.ensure([], require => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const InvestDetail = require('./routes/InvestDetail').default
      const InvestAdd = require('./routes/InvestAdd').default
      const NewInvest = require('./routes/NewInvest').default

      /*  Return getComponent   */
      cb(null, [InvestAdd(store), InvestDetail(store), NewInvest(store)])
    })
  }
})
