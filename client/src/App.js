import logo from './logo.svg';
import './App.css';
import Header from './components/headers/Header';
import Home from './components/headers/home/Home';
import { Box, styled } from '@mui/material';

const HomeCss = styled(Box)`
margin-top : 54px;
`
  ;

function App() {
  return (
    <div>

      <Header />
      <HomeCss>
        <Home />
      </HomeCss>
    </div>
  );
}

export default App;
