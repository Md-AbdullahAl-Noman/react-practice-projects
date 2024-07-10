import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'


export default function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
