import './App.css';

import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

import ProductTable from './component/productTable/ProductTable';
import PastOrder from "./component/Oder/PastOrder"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
       <Route path='/createOrder' element={<ProductTable/>}/> 
       <Route path='/pastOrder' element={<PastOrder />}/>    
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;
