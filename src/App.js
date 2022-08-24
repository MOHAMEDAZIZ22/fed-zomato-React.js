import './App.css';
import './components/zomato.js';

import Foods from './components/zomato.js';
import logo from "./components/logo1.png";


function App() {
  return (
    <div className='App'>
      <header className='App-header'>

        <h1>Zomato</h1>
      
        <input type={"search"} placeholder="Search your favorite" width={20} height={10}></input>

        <button>LOGIN</button>
        <button>SignUp</button>
        

      </header>
      <Foods></Foods>

    </div>

  );
}

export default App;







