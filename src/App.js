import logo from './logo.svg';
import './App.css';
import VacationForm from "./components/VacationForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VacationForm/>

      </header>
    </div>
  );
}

export default App;
