import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Product from './components/Product';
import Header from './components/Header';
import ProductEdit from './components/ProductEdit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/edit/:id" element={<ProductEdit/>}/>
        </Routes>
      </div>   
    </BrowserRouter>
  );
}

export default App;
