import React from "react";
import VacationList from "../components/VacationList";
import VacationForm from "./VacationForm";

const IndexPage = ({vacationData, addNewVacation}) => {
    return (
        <div>
            <h1>Index Page</h1>
            <VacationForm addNewVacation={addNewVacation}/>
            <VacationList vacationData={vacationData}/>
        </div>
    );
};

export default IndexPage;