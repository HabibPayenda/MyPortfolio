import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Main />
      <Navbar />
    </div>
  );
}

export default App;
