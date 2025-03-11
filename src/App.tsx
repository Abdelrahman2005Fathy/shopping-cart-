import './App.css';

import { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { updateTotal } from '../slice/shoppingSlice';
import Navbar from './components/Navbar';
import ShoppingProduct from './components/ShoppingProduct';
import { RootState } from './types/types';

function App() {
    const {products} = useSelector((store: RootState)=>store.shopping);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(updateTotal())
    },[products, dispatch])
  return (
    <>
    <div className="header">
      <h1>Shopping Cart</h1>
    </div>
    <Navbar/>
    <ShoppingProduct/>
    </>
  )
}

export default App
