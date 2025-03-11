import '../styles/Navbar.css';

import { useSelector } from 'react-redux';

import {
  RootState,
} from '../types/types'; // قم بتعديل المسار حسب تنظيم المشروع

const Navbar = () => {
  // تحديد نوع البارامتر store هنا باستخدام النوع RootState
  const quantity = useSelector((store: RootState) => store.shopping.quantity);

  return (
    <div className='nav'>
      <p>Home</p>
      <p>
        Basket
        <span className='amount'>{quantity}</span>
      </p>
    </div>
  );
};

export default Navbar;
