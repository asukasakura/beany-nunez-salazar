import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import HeaderMenu from './components/HeaderMenu';

function App() {

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
      <NavBar></NavBar>
      <ItemListContainer greeting="Beancitos"/>
      
      </div> 
      <div className="drawer-side">
        <label for="my-drawer-3" className="drawer-overlay"></label> 
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <HeaderMenu />
        </ul>
      </div>
    </div>
  );
}

export default App;
