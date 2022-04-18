import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Home/Services/Services';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        </Routes>
       
        <Footer></Footer>
    </div>
  );
}

export default App;
