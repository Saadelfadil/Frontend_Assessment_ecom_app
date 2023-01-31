import './App.css';
import Navbar from './components/Navbar';
import ContactNavrbar from './components/ContactNavrbar';
import Card from './components/Card';
import Products from './components/Products';
import styles from './style';

function App() {
  return (
    <>
      {/* <div className='w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <ContactNavrbar />
            <Navbar />
          </div>
        </div>
      </div> */}

      <div className=' bg-slate-100 w-full h-screen'>
        <div>
          <div className='w-full flex py-6 justify-between items-center nav bg-white'>
           <ContactNavrbar />
          </div>
          <div className='w-full flex py-6 justify-between items-center nav'>
            <Navbar />
          </div>
        </div>
        <Products />
      </div>
    </>
  );
}

export default App;
