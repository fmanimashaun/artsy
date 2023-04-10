import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Auction from 'pages/Auction';
import Drop from 'pages/Drop';
import Marketplace from 'pages/Marketplace';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/auction" element={<Auction />} />
      <Route path="/drop" element={<Drop />} />
    </Routes>
  </>
);

export default App;
