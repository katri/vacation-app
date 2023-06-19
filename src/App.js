import './App.css';
import VacationForm from "./components/VacationForm";
import VacationList from "./components/VacationList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <VacationForm/>

                <VacationList/>
            </header>
        </div>
    );
}

export default App;
