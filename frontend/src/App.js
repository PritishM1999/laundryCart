import './App.css';

import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

import ProductTable from './component/productTable/ProductTable';
import PastOrder from "./component/Oder/PastOrder"

import SignIn from './component/signin/Login';
import SignUp from './component/Signup/Register';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
       <Route path='/createOrder' element={<ProductTable/>}/> 
       <Route path='/pastOrder' element={<PastOrder/>}/>   
       <Route path="/SignIn" element={<SignIn/>}/>
       <Route path="/SignUp" element={<SignUp/>}/> 
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;
