import './index.css';
import 'tailwindcss';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '../context/store';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
  )