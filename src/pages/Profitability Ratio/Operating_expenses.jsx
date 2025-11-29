import React, { useState } from "react";
import { useData } from "../../Context/DataContext";

const Operating_expenses = () => {

    const { setOEData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [value3, setvalue3] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 - value2 - value3;
        setresult(total);
        setOEData(total);
    };

    return (
        <>
            <div>
                <h2>Operating Expenses: {result}</h2>
                <div>
                    <label>Total expenses:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Finance Cost:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <label>Depreciation and Amortization:
                        <input type="number" value={value3} onChange={(e) => setvalue3(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Operating_expenses;
