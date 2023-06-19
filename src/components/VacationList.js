import React, {useEffect, useState} from 'react';

const VacationList = () => {
    const [vacationRequests, setVacationRequests] = useState([]);

    useEffect(() => {
        fetchVacationRequests();
    }, []);

    const fetchVacationRequests = async () => {
        try {
            // todo Replace API endpoint with  actual API endpoint
            const response = await fetch('/api/vacation-requests');
            const data = await response.json();
            setVacationRequests(data);
        } catch (error) {
            console.log('Error fetching vacation requests:', error);
        }
    };

    return (
        <div>
            <h2>My Vacation Requests</h2>
            {vacationRequests.length === 0 ? (
                <p>No vacation requests found.</p>
            ) : (
                <ul>
                    {vacationRequests.map((request) => (
                        <li key={request.id}>
                            <div>Start Date: {request.startDate}</div>
                            <div>End Date: {request.endDate}</div>
                            <div>Number of Days: {request.numDays}</div>
                            <div>Comment: {request.comment}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default VacationList;
