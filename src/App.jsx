import { Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from 'components/Navbar';
import Home from 'routing/Home';
import Create from 'routing/Create';
import BlogDetails from 'routing/BlogDetails';
import NotFound from 'routing/NotFound';

const App = () => (
  <div className="App">
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </div>
);

export default App;
