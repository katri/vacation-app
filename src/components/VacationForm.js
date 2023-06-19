import React, { useState } from 'react';

const VacationForm = ({ addNewVacation }) => {
    const [startDate, setStartDate] = useState('');
    const [numDays, setNumDays] = useState('');
    const [endDate, setEndDate] = useState('');
    const [comment, setComment] = useState('');

    const handleStartDateChange = (e) => {
        const selectedStartDate = new Date(e.target.value);
        setStartDate(e.target.value);

        if (selectedStartDate && numDays) {
            const selectedEndDate = new Date(selectedStartDate);
            selectedEndDate.setDate(selectedEndDate.getDate() + parseInt(numDays, 10));
            setEndDate(selectedEndDate.toISOString().split('T')[0]);
        }
    };

    const handleNumDaysChange = (e) => {
        const selectedNumDays = e.target.value;
        setNumDays(selectedNumDays);

        if (startDate && selectedNumDays) {
            const selectedEndDate = new Date(startDate);
            selectedEndDate.setDate(selectedEndDate.getDate() + parseInt(selectedNumDays, 10));
            setEndDate(selectedEndDate.toISOString().split('T')[0]);
        }
    };

    const handleEndDateChange = (e) => {
        const selectedEndDate = new Date(e.target.value);
        setEndDate(e.target.value);

        if (startDate && selectedEndDate) {
            const diffTime = Math.abs(selectedEndDate - new Date(startDate));
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setNumDays(diffDays);
        }
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newVacation = {
            startDate,
            numDays,
            endDate,
            comment,
        };

        addNewVacation(newVacation);

        setStartDate('');
        setNumDays('');
        setEndDate('');
        setComment('');
    };

    const handleReset = () => {
        setStartDate('');
        setNumDays('');
        setEndDate('');
        setComment('');
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
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
};

export default VacationForm;
