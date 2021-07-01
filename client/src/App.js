import './App.css'
import '../src/styling/index.scss'
import HomeScreen from './components/HomeScreen'
import Navbar from './components/Navbar'
// import Topbar from './components/Topbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Testimonials from './components/testimonials__folder/Testimonials'
import Services from './components/Services'
import Contact from './components/Contact'
import Map from './components/Map'
import About from './components/About'
import Error404 from './components/Error404'
import { Route, Switch } from 'react-router'

function App() {
  return (
    <div className='App'>
      <div className='main__div'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/service'>
            <Services />
          </Route>
          <Route exact path='/gallery'>
            <Gallery />
          </Route>
          <Route exact path='/testimonial'>
            <Testimonials />
          </Route>
          <Route exact path='/contact'>
            <Map />
            <Contact />
          </Route>
          <Route path='*'>
            <Error404 />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App
