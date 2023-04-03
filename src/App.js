import './App.css';
import Routings from './Routes/routes';
import { Provider } from 'react-redux';
import store from './store';

import { ToastContainer} from 'react-toastify';
function App() {
  return (
    <div className='selection:bg-black selection:text-white overflow-x-hidden'>
    <Provider store={store}>
      <Routings></Routings>
      <ToastContainer autoClose={1500}/>
    </Provider>
    </div>
  );
}

export default App;
