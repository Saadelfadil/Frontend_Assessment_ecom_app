import './App.css';
import Navbar from './components/Navbar';
import ContactNavrbar from './components/ContactNavrbar';
import Products from './components/Products';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');

  return (
    <>
      <div className=' bg-slate-100 w-full h-screen'>
        <div>
          <div className='w-full flex py-6 justify-between items-center nav bg-white'>
           <ContactNavrbar />
          </div>
          <div className='w-full flex py-6 justify-between items-center nav'>
            <Navbar setSearch={setSearch}/>
          </div>
        </div>
        <Products search={search}/>
      </div>
    </>
  );
}

export default App;
