// import logo from './logo.svg';
// import './App.css';
// // import { DatePicker } from 'antd';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Body from './pages/home/Body.js'
// import Main from './pages/dashboard/Main.js'


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Body />}>
//           {/* <Route index element={<Home />} /> */}
//           <Route path="dashboard" element={<Main />} />

//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './pages/home/Body.js';
import Main from './pages/dashboard/Main.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/dashboard" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
