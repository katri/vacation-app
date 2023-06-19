import './App.css';
import VacationForm from "./components/VacationForm";
import VacationList from "./components/VacationList";
import vacations from "./data/vacations";
import {useState} from "react";

function App() {
    const [vacationData, setVacationData] = useState(vacations);

    const addNewVacation = (newVacation) => {
        setVacationData([...vacationData, newVacation]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <VacationForm addNewVacation={addNewVacation} />
                <VacationList vacations={vacationData} />
            </header>
        </div>
    );
}

export default App;
