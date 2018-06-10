import CoreLayout from '../layouts/CoreLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import { HomeLayout } from '../layouts/HomeLayout/HomeLayout'
import AdminLayout from '../layouts/AdminLayout/AdminLayout'

import Home from './Home'
import LoginRoute from './Login'
import SignupRoute from './Signup'
import ProjectsRoute from './Projects'
import AccountRoute from './Account'
import NotFoundRoute from './NotFound'
import Dashboard from './Dashboard'
import InvestRoute from './Invest'
import WalletRoute from './Wallet'
import ProfileRoute from './Profile'
import SettingsRoute from './Settings'
import ReferralsRoute from './Referrals'
import RefRoute from './Ref'
import RefCodeRoute from './Ref/routes/RefCode'

import AInvestmentRoute from './Admin/routes/AInvestment'
//admin
import Admin from './Admin'
import TransactionRoute from './Transaction'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = store => ({
  path: '/',
  component: CoreLayout,
  // indexRoute: Home,
  indexRoute: { onEnter: (nextState, replace) => replace('/login') },
  childRoutes: [
    {
      path: '/dashboard',
      component: DashboardLayout,
      indexRoute: Dashboard,
      childRoutes: [
        // AccountRoute(store),
        // ProjectsRoute(store),
        InvestRoute(store),
        WalletRoute(store),
        ProfileRoute(store),
        SettingsRoute(store),
        ReferralsRoute(store),
        TransactionRoute(store)
        // LoginRoute(store),
        // SignupRoute(store),
        // ProjectsRoute(store),
        // AsyncRoute(store) // async routes setup by passing store
        // SyncRoute, // sync routes just need route object by itself
        /* Place all Routes above here so NotFoundRoute can act as a 404 page */
        // NotFoundRoute(store)
      ]
    },
    {
      path: '/home',
      component: HomeLayout,
      indexRoute: Home,
      childRoutes: [
        RefCodeRoute(store),                
        LoginRoute(store), 
        SignupRoute(store), 
        RefRoute(store),
      ]
    },
    {
      path: '/admin',
      component: AdminLayout,
      indexRoute: Admin(store),
      childRoutes: [
        AInvestmentRoute(store)
      ]
    },
    // LoginRoute(store),
    // SignupRoute(store),

    // AsyncRoute(store) // async routes setup by passing store
    // SyncRoute, // sync routes just need route object by itself
    /* Place all Routes above here so NotFoundRoute can act as a 404 page */

    NotFoundRoute(store)
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
