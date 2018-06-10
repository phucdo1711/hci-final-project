export default store => ({
  path: "investments",
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure(
      [],
      require => {
        /*  Webpack - use require callback to define
          dependencies for bundling   */
        const AInvestment = require("./components/AInvestment").default;

        /*  Return getComponent   */
        cb(null, AInvestment);

        /* Webpack named bundle   */
      },
      "AInvestment"
    );
  },
  getChildRoutes(partialNextState, cb) {
    require.ensure([], require => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      // const InvestDetail = require("./routes/InvestDetail").default;
      // const InvestAdd = require("./routes/InvestAdd").default;
      const NewInvest = require("./routes/newInvest").default;
      const EditInvest = require("./routes/EditInvest").default;

      /*  Return getComponent   */
      cb(null, [NewInvest(store), EditInvest(store)]);
    });
  }
});
