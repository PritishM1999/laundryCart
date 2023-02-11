import './App.css';
<<<<<<< HEAD
=======

import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

import ProductTable from './component/productTable/ProductTable';
>>>>>>> 3a0e1995e5705d6912e1f3182de3bfbfd105d460

import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

import ProductTable from './component/productTable/ProductTable';
import PastOrder from "./component/Oder/PastOrder"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
       <Route path='/createOrder' element={<ProductTable/>}/> 
       <Route path='/pastOrder' element={<PastOrder />}/>    
=======
       <Route path='/createOrder' element={<ProductTable/>}/>     
>>>>>>> 3a0e1995e5705d6912e1f3182de3bfbfd105d460
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;
