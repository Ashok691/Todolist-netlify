import './App.css';
import List from '../Util/List'

function App() {
  return (
    <>
      <section>
      <header className='headerFile'>
        <h2>My ToDo LiSt</h2>
      </header>
      <div className='container'>
        <div className='dialogue'>
          {/* <p className='think'>Think</p> */}
          <p className='plan'>Plan</p>
          <p className='write'>Write</p>
          <p className=''>Do</p>
        </div>
        <div className="rectangle">
           <List/>
        </div>  
      </div>
      </section>

      
    </>
  );
}

export default App;
