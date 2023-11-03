
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import ProductList from './Pages/Products';


function App() {
  return (
  <>
 
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path='/'element={<ProductList/>}></Route>
    <Route path='/about'element={<About/>}></Route>
    <Route path='/contact'element={<Contact/>}></Route>
 
  </Routes>

  <Footer/>
  </BrowserRouter>
 


  </>
  );
}

export default App;
