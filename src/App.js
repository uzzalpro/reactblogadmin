import logo from './logo.svg';
import './App.css';
// import { DatePicker } from 'antd';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './pages/home/Body.js'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
