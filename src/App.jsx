import {Home} from './Screens/Home'
import {Services} from './Screens/Services'
import {HowWeWork} from './Screens/HowWeWork'
import {Benefits} from './Screens/Benefits'
import {Contact} from './Screens/Contact'
import { NavBar } from './Components/NavBar'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Services></Services>
      <HowWeWork></HowWeWork>
      <Benefits></Benefits>
      <Contact></Contact>
    </>
  )
}

export default App
