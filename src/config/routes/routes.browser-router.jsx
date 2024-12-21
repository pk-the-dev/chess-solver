import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes.constants'

import RootLayout from '../../views/layouts/root.layout'
import LandingPage from '../../views/pages/landing.page'

const routesConfig = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        path: routes.index,
        element: <LandingPage />,
      },
      {
        path: '*',
        element: <LandingPage />,
      },
    ],
  },
])

export default routesConfig
