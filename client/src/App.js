
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Reg from './registration/reg'
import Home from './home/home'
import Login from './login/login'
import Tv from './product/tv'
import Shop from './Shop/shop'



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route exact path="/" Component={Home} />
        <Route exact path="/Login" Component={Login} />
        <Route exact path="/Reg" Component={Reg} />
        <Route exact path="/Tv" Component={Tv} />
        <Route exact path="/Shop" Component={Shop} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
