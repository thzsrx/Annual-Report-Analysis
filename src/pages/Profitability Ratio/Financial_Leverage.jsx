import React, { useState } from "react";
import { useData } from "../../Context/DataContext";

const Finanical_Leverage = () => {

    const { setFinancialLeverageData } = useData();
    const [value1, setvalue1] = useState();
    const [value2, setvalue2] = useState();
    const [result, setresult] = useState();

    const handlecal = () => {
        const total = value1 / value2;
        setresult(total);
        setFinancialLeverageData(total);
    };

    return (
        <>
            <div>
                <h2>Financial Leverage: {result}</h2>
                <div>
                    <label>Average Total Asset:
                        <input type="number" value={value1} onChange={(e) => setvalue1(Number(e.target.value))} />
                    </label>
                    <label>Shareholder Equity:
                        <input type="number" value={value2} onChange={(e) => setvalue2(Number(e.target.value))} />
                    </label>
                    <button onClick={handlecal}>Result</button>
                </div>
            </div>
        </>
    );
};

export default Finanical_Leverage;
