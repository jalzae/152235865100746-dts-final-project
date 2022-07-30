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

const App = () => {
  return (
    <div id='App'>

      <Header ></Header>

      <Slider></Slider>

      <Banner></Banner>

      <Content></Content>

      <Footer></Footer>

    </div>
  );
}

export default App;
