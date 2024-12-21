import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  )
}
