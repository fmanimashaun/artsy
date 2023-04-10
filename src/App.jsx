import { Route, Routes } from 'react-router-dom';
import Home from "pages/Home";

const App = () => (
  <>
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </>
);

export default App;
