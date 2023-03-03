import logo from './logo.svg';
import './App.css';
import Header from './components/headers/Header';
import Home from './components/headers/home/Home';
import { Box, styled } from '@mui/material';

const Component = styled(Box)`
margin-top : 54px;
`
  ;

function App() {
  return (
    <div>

      <Header />
      <Component>
        <Home />
      </Component>
    </div>
  );
}

export default App;
