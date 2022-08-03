//css
import '../assets/cozastore/css/main.css'
import '../assets/cozastore/css/util.css'
import '../assets/cozastore/vendor/bootstrap/css/bootstrap.min.css'
import '../assets/cozastore/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assets/cozastore/fonts/iconic/css/material-design-iconic-font.min.css'

//Components
import Header from '../components/home/header'
import Footer from '../components/home/footer'
import Slider from '../components/home/slider'
import Banner from '../components/home/banner'
import Content from '../components/home/body'
import Login from '../components/single/login';
import About from './about';
import Contact from './contact';
import Event from './event';
import { useState } from 'react'

const App = () => {
  const [stateLogin, setStateLogin] = useState(false)
  const [menu, setMenu] = useState(1)

  const changeStateLogin = () => {
    setStateLogin(!stateLogin);
  }

  const changeMenu = (val) => {
    setMenu(val)
  }

  return (

    <div id='App'>{

      (stateLogin == true) ? <Login changeMenu={changeMenu} changeStateLogin={changeStateLogin}></Login> :
        <>
          <Header changeMenu={changeMenu} changeStateLogin={changeStateLogin}></Header>{
            (menu == 1) ?
              <>
                <Slider></Slider>

                <Banner></Banner>

                <Content></Content>

                <Footer></Footer>
              </> :
              (menu == 2) ?
                <About></About>
                : (menu == 3) ?
                  <Event></Event>
                  : (menu == 4) ?
                    <Contact></Contact>
                    :
                    <div>Not found Menu</div>}
        </>
    }

    </div >
  );
}

export default App;
