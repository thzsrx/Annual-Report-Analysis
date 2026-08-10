import React, { useState } from "react";

function YearSelect({ onYearChange }) {
    const [selectedYear, setSelectedYear] = useState("");
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

    const handleChange = (e) => {
        const year = e.target.value;
        setSelectedYear(year);
        if (onYearChange) onYearChange(year);
    };

    return (
        <div style={{ fontFamily: "sans-serif" }}>
            <label htmlFor="year-select">Select Year: </label>
            <select id="year-select" value={selectedYear} onChange={handleChange}>
                <option value="">--Select Year--</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>

            <div style={{ marginTop: "10px" }}>
                {selectedYear ? (
                    <h3>Selected Year: {selectedYear}</h3>
                ) : (
                    <p>No year selected yet.</p>
                )}
            </div>
        </div>
    );
}

export default YearSelect;
