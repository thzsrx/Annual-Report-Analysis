import React, { useState } from "react";
import { useData } from "../../Context/DataContext.jsx";

const Working_capital_turnover = () => {

    const { setWorkingCapitalTurnoverData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2;
        setresult(total);
        setWorkingCapitalTurnoverData(total);
    };

    return (
        <>
            <div>
                <h2>Working Capital Turnover: {result}</h2>
                <div>
                    <lable>Revenue:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </lable>
                    <lable>Average Working Capital:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </lable>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Working_capital_turnover;

