
import React from 'react'
import Navbar from './components/Navbar'
import Clients from './components/Clients'
import LearnMore from './pages/LearnMore'
import MeetCustomers from './pages/MeetCustomers'
import Achievments from './pages/Achievments'
import Designs from './pages/Designs'
import Marketing from './pages/Marketing'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Clients/>
    <LearnMore/>
    <Achievments/>
    <Designs/>
    <MeetCustomers/>
    <Marketing/>
    <Footer/>

    </div>
  )
}

export default App