import './App.css';
import VacationForm from "./components/VacationForm";
import VacationList from "./components/VacationList";
import vacations from "./data/vacations";
import {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import IndexPage from "./components/IndexPage";

function App() {
    const [vacationData, setVacationData] = useState([]);

    useEffect(() => {
        setVacationData(vacations);
    }, []);

    const addNewVacation = (newVacation) => {
        const vacationWithId = {
            id: vacationData.length + 1,
            ...newVacation,
        };

        setVacationData((prevVacations) => [...prevVacations, vacationWithId]);
    };

    //
    // const [vacationData, setVacationData] = useState(vacations);
    // const addNewVacation = (newVacation) => {
    //     const vacationWithId = {
    //         id: vacationData.length + 1,
    //         ...newVacation,
    //     };
    //
    //     setVacationData((prevVacations) => [...prevVacations, vacationWithId]);
    // };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path="/"
                               element={<IndexPage vacationData={vacationData} addNewVacation={addNewVacation}/>}/>
                        <Route path="/form"
                               element={<VacationForm addNewVacation={addNewVacation}/>}/>
                        <Route path="/list"
                               element={<VacationList vacationData={vacationData}/>}/>
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
