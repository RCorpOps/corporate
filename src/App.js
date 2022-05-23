import './App.css'
import Clients from './components/Clients'
import Copyright from './components/Copyright'
import Customers from './components/Customers'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Interface from './components/Interface'
import Navbar from './components/Navbar'
import News from './components/News'
import Newsletter from './components/Newsletter'
import Pricing from './components/Pricing'
import Projects from './components/Projects'
import Question from './components/Question'
import Slider from './components/Slider'
import Tools from './components/Tools'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <Tools />
      <Customers />
      <Pricing />
      <Slider />
      <Projects />
      <Interface />
      <Question />
      {/* <News /> */}
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  )
}

export default App
