import React, {useEffect, useState} from 'react';
import vacations from '../data/vacations';

const VacationList = () => {

    return (
        <div>
            <h2>Vacation Requests</h2>
            {vacations.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Number of Vacation Days</th>
                        <th>Comment</th>
                    </tr>
                    </thead>
                    <tbody>
                    {vacations.map((vacation) => (
                        <tr key={vacation.id}>
                            <td>{vacation.startDate}</td>
                            <td>{vacation.endDate}</td>
                            <td>{vacation.numDays}</td>
                            <td>{vacation.comment}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No vacation requests found.</p>
            )}
        </div>
    );
};

export default VacationList;
