import logo from './logo.svg';
import './App.css';
import Header from './components/headers/Header';
import Home from './components/home/Home';
import { Box, styled } from '@mui/material';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import DetailView from './components/ItemDetails/DetailView';
import Cart from './components/cart/Cart';

const Component = styled(Box)`
margin-top : 54px;
`
  ;

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Component>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<DetailView />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </Component>
    </BrowserRouter>
  );
}

export default App;
