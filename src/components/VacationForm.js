import React, { useState } from 'react';

const VacationForm = () => {
    const [startDate, setStartDate] = useState('');
    const [numDays, setNumDays] = useState('');
    const [endDate, setEndDate] = useState('');
    const [comment, setComment] = useState('');

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleNumDaysChange = (e) => {
        setNumDays(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h2>Submit Vacation Request</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={handleStartDateChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="numDays">Number of Vacation Days:</label>
                    <input
                        type="number"
                        id="numDays"
                        value={numDays}
                        onChange={handleNumDaysChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={handleEndDateChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={handleCommentChange}
                        rows="4"
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default VacationForm;
