import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import MainList from './component/MainList';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Main/>
      <MainList/>
    </div>
  );
}

export default App;
