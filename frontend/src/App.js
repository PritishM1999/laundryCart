import './App.css';

import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

import ProductTable from './component/productTable/ProductTable';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
       <Route path='/createOrder' element={<ProductTable/>}/>     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
