import { RouterProvider } from 'react-router-dom'
import './App.scss'
import routesConfig from './config/routes/routes.browser-router'
import { ChessBoardProvider } from './context/chess-board/chess-board.context.provider'

function App() {
  document.addEventListener('contextmenu', (event) => {
    // event.preventDefault();
  });

  return (
    <>
      <ChessBoardProvider>
        <RouterProvider router={routesConfig} />
      </ChessBoardProvider>
    </>
  )
}

export default App
